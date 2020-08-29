import React from "react";
import { IMAGE_URL } from "../../config";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "../../styles/movie.css";

export default function MovieDetail(props) {
  // 영화 정보와 영화 키워드
  // console.log(props);

  const {
    // id,
    title,
    original_title,
    genres,
    production_countries,
    runtime,
    tagline,
    overview,
    vote_average,
    release_date,
    // poster_path,
    backdrop_path,
  } = props.results;

  const { keywords } = props;

  // 날짜에서 연도 추출
  let release_year;
  if (release_date) {
    release_year = release_date.slice(0, 4);
  }

  // 나라 2개만 추출
  let countries;
  if (production_countries) {
    countries = production_countries.slice(0, 2);
  }

  return (
    <div className="MovieDetail">
      {backdrop_path ? (
        <img
          src={`${IMAGE_URL}w1280/${backdrop_path}`}
          alt="movie_image"
          className="detail_image"
        />
      ) : (
        <img
          src="clapperboard.png"
          width="200"
          alt=""
          style={{ opacity: 0.5 }}
        />
      )}
      <Paper className="movie_detail_paper">
        <div className="movie_detail_contents">
          <ul className="movie_detail_items">
            <header className="movie_detail_item1">
              <Typography variant="h3">{title}</Typography>
              <Typography variant="h6">{original_title}</Typography>
              <Typography variant="body1">{tagline}</Typography>
            </header>
            <li className="movie_detail_item2">
              <Typography variant="subtitle1">
                Genre
                {genres
                  ? genres.map((genre, i) => <div key={i}>{genre.name}</div>)
                  : ""}
                Country
                {production_countries
                  ? countries.map((country, i) => (
                      <div key={i}>{country.name} </div>
                    ))
                  : ""}
              </Typography>
            </li>
            <li className="movie_detail_item3">
              <Typography variant="subtitle1">
                Rating
                <div>{vote_average}</div>
                Runtime
                <div>{runtime}m</div>
                Year
                <div>{release_year}</div>
              </Typography>
            </li>
          </ul>
          <br />
          <br />
          <p className="movie_detail_body">
            <Typography variant="body1">{overview}</Typography>
          </p>
          <br />
          <li className="movie_detail_item4">
            {keywords
              ? keywords.map((keyword, i) => (
                  <Typography variant="caption" key={i}>
                    #{keyword.name}
                    {"  "}
                  </Typography>
                ))
              : ""}
          </li>
        </div>
      </Paper>
    </div>
  );
}
