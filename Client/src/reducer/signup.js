import { SIGN_UP } from "../action/signupAction";

let initialState = {
  name: "test",
  email: "test@gmail.com",
  password: "*****",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, register: action.payload };
    default:
      return state;
  }
}
