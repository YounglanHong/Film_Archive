import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieDetail from "./MovieDetail";
import { API_KEY, API_URL, IMAGE_URL } from "../../config";

import "../../styles/movie.css";

export default function Movie(props) {
  // console.log(props.id);
  let [results, setResults] = useState("");
  let [keywords, setKeywords] = useState([]);

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

  return (
    <div className="Movie">
      <MovieDetail results={results} keywords={keywords} />
    </div>
  );
}
