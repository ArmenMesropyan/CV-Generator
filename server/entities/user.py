import datetime

from db import db


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String, unique=True, nullable=False)
    password_hash = db.Column(db.String, nullable=False)
    registration_date = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)