from marshmallow import Schema, fields


class LoginResponse(Schema):
    id = fields.Integer(required=True)
    username = fields.Str(required=True)
    token = fields.Str()