from common.error_messages import ErrorMessages
from marshmallow import Schema, ValidationError, fields, validates


class CreateCVRequest(Schema):
    name = fields.Str(required=True)

    @validates('name')
    def validate_username(self, value):
        if len(value) < 2 or len(value) > 50:
            raise ValidationError(ErrorMessages.CV_Name)
