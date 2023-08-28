from marshmallow import Schema, fields


class UserResponse(Schema):
    id = fields.Integer(required=True)
    username = fields.Str(required=True)