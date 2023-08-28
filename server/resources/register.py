from flask_bcrypt import generate_password_hash
from flask_restful import Resource

from common.api_error import ApiError
from common.jwt import JWT
from common.validate import validate
from db import db
from entities.user import User
from models.enums.custom_errors import CustomErrors
from models.request.register import RegisterRequest
from models.response.register import RegisterResponse


class Register(Resource):
    @validate(RegisterRequest)
    def post(self, data):

        pw_hash = generate_password_hash(data['password'])

        prev_user = User.query.filter_by(username=data['username']).first()

        if prev_user != None:
             raise ApiError('Username already exists!', CustomErrors.AlreadyExists)

        user = User(username=data['username'], password_hash=pw_hash)
        db.session.add(user)

        db.session.commit()

        response_schema = RegisterResponse()

        response = response_schema.dump(user)

        response['token'] = JWT.encode(response['id'])

        return response, 201