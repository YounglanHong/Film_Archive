import React, { useState, useEffect } from "react";
import axios from "axios";

import { API_KEY, API_URL } from "../config";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../styles/movie.css";

import PopularList from "../components/MovieList/PopularList";
import TopRatedList from "../components/MovieList/TopRatedList";
import NowPlayingList from "../components/MovieList/NowPlayingList";

export default function Home(props) {
  let [popular, setPopular] = useState("");
  let [topRated, setTopRated] = useState("");
  let [nowPlaying, setNowPlaying] = useState("");

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 9,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
        // console.log(res.data.results);
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
        // console.log(res.data.results);
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
    return (
      <Carousel responsive={responsive}>
        {popularMovies
          ? popularMovies.map((popularMovie, i) => {
              return <PopularList popularMovie={popularMovie} key={i} />;
            })
          : ""}
      </Carousel>
    );
  }

  // topRatedMovies 결과값 매핑
  function topRatedResultMap(topRatedMovies) {
    // 응답받은 검색값 존재하는 경우
    return (
      <Carousel responsive={responsive}>
        {topRatedMovies
          ? topRatedMovies.map((topRatedMovie, i) => {
              return <TopRatedList topRatedMovie={topRatedMovie} key={i} />;
            })
          : ""}
      </Carousel>
    );
  }

  // nowPlayingMovies 결과값 매핑
  function nowPlayingResultMap(nowPlayingMovies) {
    // 응답받은 검색값 존재하는 경우
    return (
      <Carousel responsive={responsive}>
        {nowPlayingMovies
          ? nowPlayingMovies.map((nowPlayingMovie, i) => {
              return (
                <NowPlayingList nowPlayingMovie={nowPlayingMovie} key={i} />
              );
            })
          : ""}
      </Carousel>
    );
  }

  return (
    <div className="Home">
      <div className="movie_list">
        <h2 className="movie_list_title">NowPlaying Movies</h2>
        {nowPlayingResultMap(nowPlaying)}
      </div>
      <div className="movie_list">
        <h2 className="movie_list_title">Popular Movies</h2>
        {popularResultMap(popular)}
      </div>
      <div className="movie_list">
        <h2 className="movie_list_title">Top Rated Movies</h2>
        {topRatedResultMap(topRated)}
      </div>
    </div>
  );
}
