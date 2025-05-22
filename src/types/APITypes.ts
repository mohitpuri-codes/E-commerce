export interface LoggedInAPIResponse {
  data: {
    status: boolean;
    message: string;
    data: Tokens;
  };
}

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface SignUpAPIResponse {
  data: APIErrorResponse;
}

export interface APIErrorResponse {
  status: boolean;
  message: string;
  data: null;
}

export interface SignUpAPIErrorResponse {
  message: string;
  name: string;
  response: {
    data: SignUpAPIErrorResponse;
  };
}
