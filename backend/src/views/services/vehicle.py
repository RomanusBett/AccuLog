from flask import Blueprint, jsonify, request
from src.views.responses import missing_fields, added_car, car_not_found, car_updated
from flask_jwt_extended import jwt_required, get_jwt_identity
from src.views.models import Cars
from src.extensions import db

addCar_bp = Blueprint('add-car', __name__)


@addCar_bp.route('/add-vehicle', methods=['POST'])
@jwt_required()
def add_car():
    new_car = request.get_json()
    required_fields = ['license', 'colour', 'year', 'model']
    
    if not new_car or not all(field in new_car for field in required_fields):
        return jsonify(missing_fields), 400
    
    license_plate = new_car['license']
    colour = new_car['colour']
    prod_year = new_car['year']
    model = new_car['model']
    
    car = Cars(license_plate=license_plate, colour=colour, prod_year=prod_year, model=model, car_owner=get_jwt_identity())
    db.session.add(car)
    db.session.commit()
    
    return jsonify(added_car), 201
    

@addCar_bp.route('/update-vehicle/<int:vehicle_id>', methods=['PUT'])
@jwt_required()
def update_car(vehicle_id):
    data = request.get_json()
    if not data:
        return jsonify(missing_fields), 400
    
    car = Cars.query.get(vehicle_id)
    
    if not car:
        return jsonify(car_not_found), 404
    
    if "license" in data:
        car.license_plate = data['license']
        
    try:
        db.session.commit()
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400
    
    return jsonify(car_updated), 200