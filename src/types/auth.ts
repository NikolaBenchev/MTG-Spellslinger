export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  sessionId: string;
  user: {
    username: string;
  };
  preferences: {};
}
