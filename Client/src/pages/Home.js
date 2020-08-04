import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { API_KEY, API_URL, IMAGE_URL } from "../config";

import "../styles/movie.css";

import PopularList from "../components/Movie/PopularList";
import TopRatedList from "../components/Movie/TopRatedList";
import NowPlayingList from "../components/Movie/NowPlayingList";

export default function Home(props) {
  let [popular, setPopular] = useState("");
  let [topRated, setTopRated] = useState("");
  let [nowPlaying, setNowPlaying] = useState("");

  useEffect(() => {
    // api key로 인기 영화 리스트 요청
    // https://developers.themoviedb.org/3/movies/get-popular-movies
    axios
      .get(`${API_URL}movie/popular?api_key=${API_KEY}`)
      .then((res) => {
        // console.log(res.data.results);
        let popularMovies = res.data.results
          // api key로 요청한 결과 인기도 순으로 정렬
          .sort((a, b) => b.popularity - a.popularity)
          // 1 ~ 10 위권 결과만 출력
          .slice(0, 10);
        // api key로 요청한 결과 로컬 state로 관리
        setPopular(popularMovies);
      })
      .catch((err) => {
        console.log(err);
      });

    // api key로 평점 좋은 영화 리스트 요청
    // https://developers.themoviedb.org/3/movies/get-top-rated-movies
    axios
      .get(`${API_URL}movie/top_rated?api_key=${API_KEY}`)
      .then((res) => {
        console.log(res.data.results);
        let topRatedMovies = res.data.results

          // 1 ~ 10 위권 결과만 출력
          .slice(0, 10);
        // api key로 요청한 결과 로컬 state로 관리
        setTopRated(topRatedMovies);
      })
      .catch((err) => {
        console.log(err);
      });

    // api key로 현재 상영 중인 영화 리스트 요청
    // https://developers.themoviedb.org/3/movies/get-now-playing
    axios
      .get(`${API_URL}movie/now_playing?api_key=${API_KEY}`)
      .then((res) => {
        console.log(res.data.results);
        let nowPlayingMovies = res.data.results
          // 10개 결과만 출력
          .slice(0, 10);
        // api key로 요청한 결과 로컬 state로 관리
        setNowPlaying(nowPlayingMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // popularMovies 결과값 매핑
  function popularResultMap(popularMovies) {
    // 응답받은 검색값 존재하는 경우
    if (popularMovies) {
      return popularMovies.map((popularMovie, i) => {
        return <PopularList popularMovie={popularMovie} key={i} />;
      });
    }
  }

  // topRatedMovies 결과값 매핑
  function topRatedResultMap(topRatedMovies) {
    // 응답받은 검색값 존재하는 경우
    if (topRatedMovies) {
      return topRatedMovies.map((topRatedMovie, i) => {
        return <TopRatedList topRatedMovie={topRatedMovie} key={i} />;
      });
    }
  }

  // nowPlayingMovies 결과값 매핑
  function nowPlayingResultMap(nowPlayingMovies) {
    // 응답받은 검색값 존재하는 경우
    if (nowPlayingMovies) {
      return nowPlayingMovies.map((nowPlayingMovie, i) => {
        return <NowPlayingList nowPlayingMovie={nowPlayingMovie} key={i} />;
      });
    }
  }

  return (
    <div className="Home">
      <div className="movie_list">
        <h2>Popular Movies</h2>
        <span className="movie_list_items">{popularResultMap(popular)}</span>
      </div>
      <div className="movie_list">
        <h2>Top Rated Movies</h2>
        <span className="movie_list_items">{topRatedResultMap(topRated)}</span>
      </div>
      <div className="movie_list">
        <h2>NowPlaying Movies</h2>
        <span className="movie_list_items">
          {nowPlayingResultMap(nowPlaying)}
        </span>
      </div>
    </div>
  );
}
