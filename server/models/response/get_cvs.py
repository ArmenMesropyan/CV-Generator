from marshmallow import Schema, fields


class GetCVSResponse(Schema):
    id = fields.Integer(required=True)
    name = fields.Str(required=True)