import re

from marshmallow import Schema, ValidationError, fields, validates

from common.error_messages import ErrorMessages
from common.regex import Regex


class LoginRequest(Schema):

    username = fields.Str(required=True)
    password = fields.Str(required=True)

    @validates('username')
    def validate_username(self, value):
        if len(value) < 2 or len(value) > 50:
            raise ValidationError(ErrorMessages.Username)

    @validates('password')
    def validate_password(self, value):
        if not re.match(Regex.password, value):
            raise ValidationError(ErrorMessages.Password)
