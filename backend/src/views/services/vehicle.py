from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from src.views.responses import missing_fields, added_car, car_not_found, car_updated
from src.views.models import Cars
from src.extensions import db

addCar_bp = Blueprint('add-car', __name__)

@login_required
@addCar_bp.route('/add-vehicle', methods=['POST'])
def add_car():
    car_to_add = request.get_json()
    
    if not car_to_add:
        return jsonify(missing_fields), 400
    
    license_plate = car_to_add['license']
    
    car = Cars(license_plate=license_plate)
    car.owner = current_user
    db.session.add(car)
    db.session.commit()
    
    return jsonify(added_car), 201
    
@login_required
@addCar_bp.route('/update-vehicle/<int:vehicle_id>', methods=['PUT'])
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