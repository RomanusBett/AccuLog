from flask import Blueprint, jsonify
from src.views.models import Payments
from flask_login import login_required

get_payment_bp = Blueprint('get_payments', __name__)

@login_required
@get_payment_bp.route('/get_cleared_cars', methods=['GET'])
def get_cleared():
    confirmed_payments = Payments.query.filter(Payments.mpesa_code.isnot(None)).all()
    
    paid_results = []
    amount_earned = 0
    
    for payment in confirmed_payments:
        amount_earned += payment.due_amount
        paid_results.append({
            "id": payment.id,
            "mpesa_code": payment.mpesa_code,
            "due_amount": payment.due_amount,
            "owner": {
                "id": payment.client.id,
                "name": payment.client.name,
            },
            "payment": {
                "mpesa_code": payment.car.license_plate,
                "car_id": payment.car.id
            }
        })
    
    return jsonify({
        "amount_earned": amount_earned,
        "cleared_payments": paid_results
        }), 200

@get_payment_bp.route('/get_uncleared_cars', methods=['GET'])
def get_uncleared():
    unconfirmed_payments = Payments.query.filter(Payments.mpesa_code.is_(None)).all()
    
    unpaid_results = []
    total_due_amount = 0
    
    for payment in unconfirmed_payments:
        total_due_amount+=payment.due_amount
        unpaid_results.append({
            "id": payment.id,
            "mpesa_code": payment.mpesa_code,
            "due_amount": payment.due_amount,
            "owner": {
                "id": payment.client.id,
                "name": payment.client.name,
            },
            "payment": {
                "mpesa_code": payment.car.license_plate,
                "car_id": payment.car.id
            }
        })
    
    return jsonify({
        "total_due_amount": total_due_amount,
        "uncleared_payments":unpaid_results
        }), 200