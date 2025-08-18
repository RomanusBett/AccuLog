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
    car_owner = db.Column(db.Integer, db.ForeignKey('user.id'))
    payments = db.relationship('Payments', backref='car', lazy=True)
    
    def __init__(self, license_plate):
        self.license_plate = license_plate
        
    
class Payments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    paying_client = db.Column(db.Integer, db.ForeignKey('user.id'))
    car_done = db.Column(db.Integer, db.ForeignKey('cars.id'), nullable=False)
    mpesa_code = db.Column(db.String, unique=True, nullable=True)
    due_amount = db.Column(db.Integer, nullable=False)
    
@app.cli.command('drop_db')
def drop_db():
    db.drop_all()
    print('Dropped all databases')