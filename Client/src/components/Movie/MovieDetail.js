import React from "react";
import { API_KEY, API_URL, IMAGE_URL } from "../../config";

import Link from "@material-ui/core/Link";

import "../../styles/movie.css";

export default function MovieDetail(props) {
  // console.log(props); // 영화 정보와 영화 키워드

  const {
    id,
    title,
    original_title,
    genres,
    production_countries,
    runtime,
    tagline,
    overview,
    homepage,
    vote_average,
    release_date,
    poster_path,
  } = props.results;

  const { keywords } = props;

  return (
    <div className="MovieDetail">
      <h2>{title}</h2>
      <div>{original_title}</div>
      <div>{vote_average}</div>
      <div>{runtime}</div>
      {poster_path ? (
        <img src={`${IMAGE_URL}w200/${poster_path}`} alt="poster_image" />
      ) : (
        <img
          src="clapperboard.png"
          width="200"
          alt=""
          style={{ opacity: 0.5 }}
        />
      )}
      <div>{tagline}</div>
      <div>
        {genres ? genres.map((genre) => <span>{genre.name} </span>) : ""}
      </div>
      <div>{overview}</div>
      {/* <Link>{homepage}</Link> */}
      <div>{release_date}</div>
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
