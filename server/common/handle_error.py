from flask import jsonify


def handle_error(error):
    try:
        response = {
            'error': getattr(error, 'message'),
            'status_code': getattr(error, 'status_code')
        }
        return jsonify(response), getattr(error, 'response_code')
    except:
        return error