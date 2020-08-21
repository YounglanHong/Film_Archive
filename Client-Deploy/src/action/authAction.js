import axios from "axios";

// action 타입
export const AUTH_USER = "AUTH_USER";

// action 생성

export function auth() {
  const userData = axios.get("/api/users/auth").then((res) => res.data);

  return {
    type: AUTH_USER,
    payload: userData,
  };
}
