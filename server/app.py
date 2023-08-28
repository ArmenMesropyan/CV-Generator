import os

from dotenv import load_dotenv
from flask import Flask
from flask_migrate import Migrate
from flask_restful import Api

from common.handle_error import handle_error
from db import db
from resources.cv import CV
from resources.login import Login
from resources.register import Register
from resources.user import User

load_dotenv()

app = Flask(__name__)
api = Api(app, '/api')

app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URI')

migrate = Migrate(app, db)

db.init_app(app)

@app.errorhandler(Exception)
def centralized_error_handler(error):
    return handle_error(error)

api.add_resource(Register, '/register')
api.add_resource(Login, '/login')
api.add_resource(CV, '/cv')
api.add_resource(User, '/user')

if __name__ == '__main__':
    app.run(debug=os.getenv('DEBUG') == 'True')