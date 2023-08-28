from marshmallow import Schema, fields


class RegisterResponse(Schema):
    id = fields.Integer(required=True)
    username = fields.Str(required=True)
    token = fields.Str()