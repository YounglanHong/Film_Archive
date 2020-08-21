import { combineReducers } from "redux";
import user from "./user";
import movie from "./movie";

// 분리된 리듀서 결합(combineReducers)
const rootReducer = combineReducers({
  user,
  movie,
});

export default rootReducer;
