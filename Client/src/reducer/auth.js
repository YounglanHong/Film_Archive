import { AUTH_USER } from "../action/authAction";

// let initialState = {
//   email: "1@gmail.com",
//   isAdmin: false,
//   isAuth: true,
//   name: "1",
//   role: 0,
//   _id: "5f37afc1e69e433831bbe6b9"
// };

export default function auth(state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
}
