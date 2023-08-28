from flask import request
from flask_restful import Resource

from common.auth_required import auth_required
from entities.user import User as UserEntity
from models.response.user import UserResponse


class User(Resource):
    @auth_required
    def get(self):
        user_id = request.token_data.get('id')

        user = UserEntity.query.get(user_id)

        response_schema = UserResponse()

        response = response_schema.dump(user)

        return response, 200