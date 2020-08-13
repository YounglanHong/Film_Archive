import axios from "axios";

// action 타입
export const SIGN_IN = "SIGN_IN";

// action 생성
export function signIn(signinData) {
  const userData = axios
    .post("/api/users/signin", signinData)
    .then((res) => res.data);
  return {
    type: SIGN_IN,
    payload: userData,
  };
}
