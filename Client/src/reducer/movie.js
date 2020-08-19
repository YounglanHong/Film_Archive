import { ADD_FAV } from "../action/movieAction";
import { ADD_REVIEW } from "../action/movieAction";
import { ADD_WATCHED } from "../action/movieAction";

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_REVIEW:
      return { ...state, review: action.payload };
    case ADD_FAV:
      return { ...state, favData: action.payload };
    case ADD_WATCHED:
      return { ...state, watchedData: action.payload };
    default:
      return state;
  }
}
