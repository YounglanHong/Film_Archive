import {
  ADD_FAV,
  ADD_REVIEW,
  ADD_WATCHED,
  GET_FAV,
  GET_REVIEW,
  GET_WATCHED,
} from "../action/movieAction";

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_REVIEW:
      return { ...state, review: action.payload };
    case ADD_FAV:
      return { ...state, favData: action.payload };
    case ADD_WATCHED:
      return { ...state, watchedData: action.payload };
    case GET_REVIEW:
      return { ...state, reviewData: action.payload };
    case GET_FAV:
      return { ...state, favData: action.payload };
    case GET_WATCHED:
      return { ...state, watchedData: action.payload };
    default:
      return state;
  }
}
