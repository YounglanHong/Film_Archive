import { combineReducers } from "redux";
import signin from "./signin";

// 분리된 리듀서 결합(combineReducers)
const rootReducer = combineReducers({
  signin,
});

export default rootReducer;
