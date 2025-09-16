from flask import Blueprint, request, jsonify
from src.views.models import User
from src import db, bcrypt
from flask_login import login_user
from src.views.responses import success_register, missing_fields, user_exists
from flask_jwt_extended import create_access_token

register_bp = Blueprint('register', __name__)

@register_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    
    if not data or not all(keys in data for keys in('name', 'email', 'password')):
        return jsonify(missing_fields), 400
    
    name = data['name']
    email = data['email']
    password = data['password']
    
    existing_user = User.query.filter(User.email == email).first()
    if existing_user:
        return jsonify(user_exists), 400
    
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    new_user = User(name=name, email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    
    access_token = create_access_token(
        identity=new_user.id
    )
    
    return jsonify({
        "message": "Registration Successful",
        "access_token": access_token,
        "user": {
            "id": new_user.id,
            "name": new_user.name,
            "email": new_user.email
        }
        }), 201