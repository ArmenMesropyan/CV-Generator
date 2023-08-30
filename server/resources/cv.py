from flask import make_response, request
from flask_restful import Resource

from common.api_error import ApiError
from common.auth_required import auth_required
from common.validate import validate
from db import db
from entities.cv import CV as CVEntity
from models.enums.custom_errors import CustomErrors
from models.request.create_cv import CreateCVRequest
from models.response.get_cvs import GetCVSResponse


class CV(Resource):
    @auth_required
    @validate(CreateCVRequest)
    def post(self, data):
        user_id = request.token_data.get('id')

        prev_cv = CVEntity.query.filter_by(name=data['name']).first()

        if prev_cv != None:
            raise ApiError('Name already exists!', CustomErrors.AlreadyExists)

        cv = CVEntity(name=data['name'], user_id=user_id)
        
        db.session.add(cv)

        db.session.commit()

        return make_response('', 201)

    @auth_required
    def get(self):
        user_id = request.token_data.get('id')

        cvs = CVEntity.query.filter_by(user_id=user_id).all()

        response_schema = GetCVSResponse(many=True)

        response = response_schema.dump(cvs)

        return response, 200