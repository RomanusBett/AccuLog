from flask import Blueprint, request, jsonify
from src.views.models import Cars, Payments
from flask_login import login_required
from src.extensions import db
from src.views.responses import missing_fields, payment_updated

clear_vehicle_bp = Blueprint('clear_vehicle', __name__)

@login_required
@clear_vehicle_bp.route('/clear/<int:payment_id>', methods=['PUT'])
def clear_vehicle(payment_id):
    code = request.get_json()
    
    if not code:
        return jsonify(missing_fields), 400
    
    payment = Payments.query.get(payment_id)
    
    if "mpesa_code" in code:
        payment.mpesa_code = code['mpesa_code']
        
    try:
        db.session.commit()
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)})
    
    return jsonify(payment_updated), 200
    
    