import axios from "axios";

// action 타입
export const GET_REVIEW = "GET_REVIEW";
export const ADD_REVIEW = "ADD_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const GET_FAV = "GET_FAV";
export const ADD_FAV = "ADD_FAV";
export const DELETE_FAV = "DELETE_FAV";
export const GET_WATCHED = "GET_WATCHED";
export const ADD_WATCHED = "ADD_WATCHED";
export const DELETE_WATCHED = "DELETE_WATCHED";

//=============================================
//                Review
//=============================================

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

//* review 정보 불러오기
export function getReview(reviewer) {
  const reviewData = axios
    .post("/api/movies/getReviews", reviewer)
    .then((res) => res.data);
  return {
    type: GET_REVIEW,
    payload: reviewData,
  };
}

//* favorite 삭제
export function deleteReview(reviewInfo) {
  const reviewData = axios
    .post("/api/movies/deleteReview", reviewInfo)
    .then((res) => res.data);
  return {
    type: DELETE_REVIEW,
    payload: reviewData,
  };
}

//=============================================
//                Favorite
//=============================================

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

//* favorite 삭제
export function deleteFav(favorite) {
  const favData = axios
    .post("/api/movies/deleteFavorite", favorite)
    .then((res) => res.data);
  return {
    type: DELETE_FAV,
    payload: favData,
  };
}

//* favorite 모든 정보 호출
export function getAllFavorite(userId) {
  const favData = axios
    .post("/api/movies/getAllFavorite", userId)
    .then((res) => res.data);
  return {
    type: GET_FAV,
    payload: favData,
  };
}

//=============================================
//                Watched
//=============================================

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

//* watched 삭제
export function deleteWatched(watched) {
  const watchedData = axios
    .post("/api/movies/deleteWatched", watched)
    .then((res) => res.data);
  return {
    type: DELETE_WATCHED,
    payload: watchedData,
  };
}

//* watched 모든 정보 호출
export function getAllWatched(userId) {
  const watchedData = axios
    .post("/api/movies/getAllWatched", userId)
    .then((res) => res.data);
  return {
    type: GET_WATCHED,
    payload: watchedData,
  };
}
