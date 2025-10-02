from flask import Blueprint, jsonify, request
from flask_login import login_user
from src.views.models import User
from src import db, bcrypt
from src.views.responses import missing_fields, invalid_credentials
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, get_jwt


login_bp = Blueprint('login', __name__)

@login_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    
    if not data or not all(keys in data for keys in('email', 'password')):
        return jsonify (missing_fields), 400
    
    email = data['email']
    password = data['password']
    
    user = User.query.filter_by(email=email).first()
    
    if not user or not bcrypt.check_password_hash(user.password, password):
        return jsonify(invalid_credentials), 401
    
    access_token = create_access_token(
        identity=str(user.id),
        additional_claims={
            "id":user.id,
            "name": user.name,
            "email": user.email,
            "is_admin":user.is_admin
        }
    )

    return jsonify({
        "message": "Login successful",
        "access_token": access_token
        }), 200
