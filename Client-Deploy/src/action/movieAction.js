import axios from "axios";

// action 타입
export const ADD_REVIEW = "ADD_REVIEW";
export const ADD_FAV = "ADD_FAV";
export const ADD_WATCHED = "ADD_WATCHED";

// action 생성
//* review 추가
export function addReview(review) {
  const reviewData = axios
    .post("/api/movies/addReview", review)
    .then((res) => res.data);
  return {
    type: ADD_REVIEW,
    payload: reviewData,
  };
}

//* favorite 추가
export function addFav(favorite) {
  const favData = axios
    .post("/api/movies/addFavorite", favorite)
    .then((res) => res.data);
  return {
    type: ADD_FAV,
    payload: favData,
  };
}

//* watched 추가
export function addWatched(watched) {
  const watchedData = axios
    .post("/api/movies/addWatched", watched)
    .then((res) => res.data);
  return {
    type: ADD_WATCHED,
    payload: watchedData,
  };
}
