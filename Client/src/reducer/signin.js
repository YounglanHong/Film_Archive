import { SIGN_IN } from "../action/signinAction";

let initialState = {
  email: "test@gmail.com",
  password: "*****",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, loginSuccess: action.payload };
    default:
      return state;
  }
}
