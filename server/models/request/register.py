import re

from marshmallow import Schema, ValidationError, fields, post_load, validates

from common.error_messages import ErrorMessages
from common.regex import Regex


class RegisterRequest(Schema):

    username = fields.Str(required=True)
    password = fields.Str(required=True)
    confirm_password = fields.Str(required=True)

    @validates('username')
    def validate_username(self, value):
        if len(value) < 2 or len(value) > 50:
            raise ValidationError(ErrorMessages.Username)

    @validates('password')
    def validate_password(self, value):
        if not re.match(Regex.password, value):
            raise ValidationError(ErrorMessages.Password)
        
    @post_load
    # Don't remove **kwargs
    def validate_confirm_password(self, data, **kwargs):
        if data['password'] != data['confirm_password']:
            raise ValidationError('Passwords do not match')
        
        return data