from flask_bcrypt import check_password_hash
from flask_restful import Resource

from common.api_error import ApiError
from common.jwt import JWT
from common.validate import validate
from entities.user import User
from models.enums.custom_errors import CustomErrors
from models.request.login import LoginRequest
from models.response.login import LoginResponse


class Login(Resource):
    @validate(LoginRequest)
    def post(self, data):
        try:
            prev_user = User.query.filter_by(username=data['username']).first()

            if prev_user is None or check_password_hash(prev_user.password_hash, data['password']) == False:
                raise 
        except:
            raise ApiError('Invalid credentials!', CustomErrors.InvalidCredentials)

        response_schema = LoginResponse()

        response = response_schema.dump(prev_user)

        response['token'] = JWT.encode(response['id'])

        return response, 200