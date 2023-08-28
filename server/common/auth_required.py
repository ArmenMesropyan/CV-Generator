from flask import request

from common.api_error import ApiError
from common.jwt import JWT
from models.enums.custom_errors import CustomErrors


def auth_required(func):
    def wrapper_func(*args, **kwargs):
        token: str = request.headers.get('Authorization')

        try:
            if token is None: 
                raise
            
            token_data = JWT.decode(token.split('Bearer ')[1])

            request.token_data = token_data
        except:
            raise ApiError('Invalid auth token', CustomErrors.TokenRequired, 401)

        return func(*args, **kwargs)
    return wrapper_func
