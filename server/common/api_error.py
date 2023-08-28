class ApiError(Exception):
    def __init__(self, message, status_code, response_code = 400):
        self.message = message
        self.status_code = status_code
        self.response_code = response_code