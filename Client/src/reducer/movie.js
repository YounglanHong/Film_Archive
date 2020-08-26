import {
  ADD_FAV,
  ADD_REVIEW,
  ADD_WATCHED,
  GET_FAV,
  GET_REVIEW,
  GET_WATCHED,
  DELETE_FAV,
  DELETE_WATCHED,
} from "../action/movieAction";

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_REVIEW:
      return { ...state, reviewData: [action.payload.reviewData] };
    case ADD_FAV:
      return { ...state, favData: [action.payload.favoriteData] };
    case ADD_WATCHED:
      return { ...state, watchedData: [action.payload.watchedData] };
    case GET_REVIEW:
      return { ...state, reviewData: action.payload.reviews };
    case GET_FAV:
      return { ...state, favData: action.payload.favoriteMovies };
    case GET_WATCHED:
      return { ...state, watchedData: action.payload.watchedMovies };
    case DELETE_FAV:
      return {
        ...state,
        favData: state.favData.filter(
          (favMovie) => favMovie.movieId !== action.payload.result.movieId
        ),
      };
    case DELETE_WATCHED:
      return {
        ...state,
        watchedData: state.watchedData.filter(
          (watchedMovie) =>
            watchedMovie.movieId !== action.payload.result.movieId
        ),
      };
    default:
      return state;
  }
}
