export enum CustomErrors {
  Validation = 0,
  TokenRequired = -1,
  AlreadyExists = -2,
  InvalidCredentials = -3,
}

export interface RequestError {
  data: {
    error: string;
    status_code: CustomErrors;
  };
}
