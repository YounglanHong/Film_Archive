import { combineReducers } from "redux";
import signin from "./signin";
import signup from "./signup";
import auth from "./auth";

// 분리된 리듀서 결합(combineReducers)
const rootReducer = combineReducers({
  signin,
  signup,
  auth,
});

export default rootReducer;
