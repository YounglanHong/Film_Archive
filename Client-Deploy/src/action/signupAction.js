import axios from "axios";

// action 타입
export const SIGN_UP = "SIGN_UP";

// action 생성
export function signUp(signupData) {
  const userData = axios
    .post("/api/users/register", signupData)
    .then((res) => res.data);
  return {
    type: SIGN_UP,
    payload: userData,
  };
}
