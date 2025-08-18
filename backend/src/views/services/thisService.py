from flask import Blueprint, request, jsonify
from src.views.models import Payments, Cars
from flask_login import login_required
from src.extensions import db
from src.views.responses import missing_fields, add_service

this_service_bp = Blueprint('create-service', __name__)

@login_required
@this_service_bp.route('/create_service', methods=['POST'])
def create_service():
    service_created = request.get_json()
    
    if not service_created:
        return jsonify(missing_fields), 400
    
    
    car_license = service_created['car_license']
    
    this_car = Cars.query.filter_by(license_plate=car_license).first()
    service = Payments(
        car_done = this_car.id,
        due_amount = int(service_created['due_amount']),
        paying_client=this_car.car_owner
    )
    
    db.session.add(service)
    db.session.commit()
    
    return jsonify(add_service), 201