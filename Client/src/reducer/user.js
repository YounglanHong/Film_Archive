import { AUTH_USER } from "../action/authAction";
import { SIGN_IN } from "../action/signinAction";
import { SIGN_UP } from "../action/signupAction";

// let initialState = {
//   email: "1@gmail.com",
//   isAdmin: false,
//   isAuth: true,
//   name: "1",
//   role: 0,
//   _id: "5f37afc1e69e433831bbe6b9"
// };

export default function (state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      // console.log(action.payload);
      // return { ...state, userData: action.payload };
      return {
        ...state,
        userId: action.payload._id,
        name: action.payload.name,
        email: action.payload.email,
      };
    case SIGN_IN:
      return { ...state, loginSuccess: action.payload };
    case SIGN_UP:
      return { ...state, register: action.payload };
    default:
      return state;
  }
}
