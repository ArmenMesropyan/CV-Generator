from flask import request

from common.api_error import ApiError
from models.enums.custom_errors import CustomErrors


def validate(Schema):
    def decorator(func):
        def wrapper_func(*args, **kwargs):
            json_data = request.get_json()

            schema = Schema()

            try:
                data = schema.load(json_data)
            except Exception as e:
                raise ApiError(str(e), CustomErrors.Validation)

            return func(*args, data, **kwargs)
        return wrapper_func

    return decorator