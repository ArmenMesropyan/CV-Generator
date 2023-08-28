import os
from datetime import *
from datetime import timedelta

import jwt

SECRET_KEY = os.getenv('APP_SECRET_KEY')

class JWT:
    def encode(user_id):
        return jwt.encode({
            'id': user_id,
            'expiration': str(datetime.utcnow() + timedelta(seconds=120))
        }, SECRET_KEY, algorithm='HS256')

    def decode(token):
        return jwt.decode(token, SECRET_KEY, algorithms=['HS256'])