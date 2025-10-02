from datetime import datetime
from flask_login import UserMixin
from src.extensions import db, app

class User(UserMixin, db.Model):    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String, nullable=False, unique=True)
    password = db.Column(db.String, nullable=False)
    created_on = db.Column(db.DateTime, nullable=False)
    is_admin = db.Column(db.Boolean, default=False, nullable=False)
    cars = db.relationship('Cars', backref='owner', lazy=True)
    payments = db.relationship('Payments', backref='client', lazy=True)
    
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password
        self.created_on = datetime.now()
        
    def __repr__(self):
        return f"<email {self.email}>"
    
class Cars(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    license_plate = db.Column(db.String(20), nullable=True, unique=True)
    colour = db.Column(db.String(30), nullable=False)
    prod_year = db.Column(db.String(4), nullable=True)
    model = db.Column(db.String(30), nullable=False)
    car_owner = db.Column(db.Integer, db.ForeignKey('user.id'))
    payments = db.relationship('Payments', backref='car', lazy=True)
    
    def __init__(self, license_plate):
        self.license_plate = license_plate
    
    
service_payments = db.Table(
    'services_payments',
    db.Column('service_id', db.Integer, db.ForeignKey('services.id'), primary_key=True),
    db.Column('payment_id', db.Integer, db.ForeignKey('payments.id'), primary_key=True)
)
    
class Payments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    paying_client = db.Column(db.Integer, db.ForeignKey('user.id'))
    car_done = db.Column(db.Integer, db.ForeignKey('cars.id'), nullable=False)
    mpesa_code = db.Column(db.String, unique=True, nullable=True)
    due_amount = db.Column(db.Integer, nullable=False)
    services = db.relationship('Services', secondary=service_payments, back_populates='payments')
    
    
class Services(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(50), nullable=False)
    servicePrice = db.Column(db.Integer, nullable=False)
    payments = db.relationship('Payments', secondary=service_payments, back_populates='services')
    
@app.cli.command('drop_db')
def drop_db():
    db.drop_all()
    print('Dropped all databases')