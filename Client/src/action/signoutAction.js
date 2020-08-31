import axios from "axios";

// action 타입
export const SIGN_OUT = "SIGN_OUT";

// action 생성
export function signOut() {
  const userData = axios.get("/api/users/signout").then((res) => res.data);
  return {
    type: SIGN_OUT,
    payload: userData,
  };
}
