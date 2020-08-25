import React from "react";
import { API_KEY, API_URL, IMAGE_URL } from "../../config";

import Link from "@material-ui/core/Link";

import "../../styles/movie.css";

export default function MovieDetail(props) {
  // 영화 정보와 영화 키워드
  // console.log(props);

  const {
    id,
    title,
    original_title,
    genres,
    production_countries,
    runtime,
    tagline,
    overview,
    vote_average,
    release_date,
    poster_path,
    backdrop_path,
  } = props.results;

  const { keywords } = props;

  console.log(props);

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
      <h2>{title}</h2>
      <h4>{original_title}</h4>
      <p>
        <span>{vote_average}</span> <span>{runtime}m</span>
        <span>{release_date}</span>
      </p>

      <p>{tagline}</p>
      <p>
        {genres
          ? genres.map((genre, i) => <span key={i}>{genre.name} </span>)
          : ""}
      </p>
      <p>
        {production_countries
          ? production_countries.map((country) => <span>{country.name} </span>)
          : ""}
      </p>
      <p>{overview}</p>
      <div>
        {keywords
          ? keywords.map((keyword) => (
              <span>
                #{keyword.name}
                {"  "}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
}
