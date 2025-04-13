export interface User {
  accessToken: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  accessExpireTime: string;
  accessExpireTimeEpoch: number;
  refreshExpireTime: string;
  refreshExpireTimeEpoch: number;
}
