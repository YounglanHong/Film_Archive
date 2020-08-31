import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import FavoriteBtn from "./Button/FavoriteBtn";
import WatchedBtn from "./Button/WatchedBtn";

import { API_KEY, API_URL } from "../../config";

import "../../styles/movie.css";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";

import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import BottomNavigation from "@material-ui/core/BottomNavigation";

const useStyles = makeStyles({
  navigation: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    margin: "10px 30px 0px 30px",
  },
});

export default function Movie(props) {
  const { userId } = props;
  const classes = useStyles();

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
  }, [props.id]);

  let link_path = {
    pathname: `/postReview/${results.original_title}`,
    state: {
      title: results.original_title,
      userId: userId,
      movieId: props.id,
      image: results.backdrop_path,
    },
  };

  return (
    <div className="Movie">
      {console.log(props)}
      <MovieDetail key={props.id} results={results} keywords={keywords} />
      <BottomNavigation className={classes.navigation}>
        <WatchedBtn
          className={classes.link}
          movieId={props.id}
          userId={userId}
          title={results.original_title}
          image={results.poster_path}
        />

        <FavoriteBtn
          movieId={props.id}
          userId={userId}
          title={results.original_title}
          image={results.poster_path}
        />

        <Link to={link_path}>
          <IconButton className={classes.link}>
            <Tooltip title="Post Review">
              <RateReviewOutlinedIcon />
            </Tooltip>
          </IconButton>
        </Link>
      </BottomNavigation>
    </div>
  );
}
