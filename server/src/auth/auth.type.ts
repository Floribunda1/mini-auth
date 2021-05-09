export interface OAuthTokenResponse {
  access_token: string;
  scope: string;
  token_type: string;
}

export interface UserInfo {
  login: string;
  id: number;
  avatar_url: string;
}
