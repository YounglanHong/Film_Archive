import {
  ADD_FAV,
  ADD_REVIEW,
  ADD_WATCHED,
  GET_FAV,
  GET_REVIEW,
  GET_WATCHED,
  DELETE_FAV,
  DELETE_WATCHED,
  DELETE_REVIEW,
} from "../action/movieAction";

// let initialState = {
//   reviewData: [
//     {
//       _id: "5f476f3cf1ca02d266dbd5dd",
//       reviewer: "5f3b6a7c7345ee15b3e1df02",
//       movieId: 27205,
//       title: "Inception",
//       image: "/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
//       review: "The best",
//       createdAt: "2020-08-27T08:30:52.413Z",
//       updatedAt: "2020-08-27T08:30:52.413Z",
//     },
//   ],
// };

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
    case DELETE_REVIEW:
      console.log(state.reviewData);
      console.log(action.payload);
      return {
        ...state,
        reviewData: state.reviewData.filter((review) =>
          action.payload.result
            ? review.movieId !== action.payload.result.movieId
            : null
        ),
      };
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
