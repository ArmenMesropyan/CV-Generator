from flask import request
from flask_restful import Resource

from common.auth_required import auth_required


class CV(Resource):
    @auth_required
    def post(self):
        print(request.token_data.get('id'))
        return {}, 200