import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieDetail from "./MovieDetail";
import { API_KEY, API_URL, IMAGE_URL } from "../../config";

import { useDispatch } from "react-redux";

import { addFav } from "../../action/movieAction";
import { addWatched } from "../../action/movieAction";

import "../../styles/movie.css";

export default function Movie(props) {
  const dispatch = useDispatch();
  // console.log(props);
  const { userId, email, name } = props;

  let [results, setResults] = useState("");
  let [keywords, setKeywords] = useState([]);
  let [favorite, setFavorite] = useState(false);
  let [watched, setWatched] = useState(false);

  useEffect(() => {
    // 영화 id로 영화 정보 요청
    // https://developers.themoviedb.org/3/movies/get-movie-details
    axios
      .get(`${API_URL}movie/${props.id}?api_key=${API_KEY}`)
      .then((res) => {
        console.log(res.data);
        // 영화 id로 요청한 결과 로컬 state로 관리
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // 영화 id로 영화 키워드 요청
    axios
      .get(`${API_URL}movie/${props.id}/keywords?api_key=${API_KEY}`)
      .then((res) => {
        console.log(res.data);
        // 영화 id로 요청한 결과 로컬 state로 관리
        setKeywords(res.data.keywords);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //* favorite 관리
  function handleFavorite(e) {
    // 새로고침 방지
    e.preventDefault();

    let body = {
      email: email,
      name: name,
      userId: userId,
    };

    dispatch(addFav(body)).then((res) => {
      console.log(res);
      if (res.payload.userId) {
        alert("Add to Favorite");
        setFavorite(true);
      } else {
        setFavorite(false);
      }
    });
  }

  //* watched 관리
  function handleWatched(e) {
    // 새로고침 방지
    e.preventDefault();

    let body = {
      email: email,
      name: name,
      userId: userId,
    };

    dispatch(addWatched(body)).then((res) => {
      console.log(res);
      if (res.payload.userId) {
        alert("Add to Watched");
        setWatched(true);
      } else {
        setWatched(false);
      }
    });
  }

  return (
    <div className="Movie">
      <button onClick={handleFavorite}>Favorite</button>
      <button onClick={handleWatched}>Watched</button>
      <MovieDetail results={results} keywords={keywords} />
    </div>
  );
}
