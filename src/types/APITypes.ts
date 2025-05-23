import type { Users } from "./UsersTypes";

export interface LoggedInAPIResponse<T> {
  data: {
    status: boolean;
    message: string;
    data: T;
  };
}

export interface Tokens {
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

export interface UsersAPIResponse {
  status: boolean;
  message: string;
  data: Users;
}
