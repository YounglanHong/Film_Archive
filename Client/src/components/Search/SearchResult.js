import React from "react";
import movie_poster from "../images/movie_poster.png";

import { IMAGE_URL } from "../../config";

export default function SearchResult(props) {
  // console.log(props.result.title);
  console.log(props);

  const { title, release_date, poster_path } = props.result;
  console.log(movie_poster);

  return (
    <div className="SearchResult">
      <div>{title}</div>
      <div>{release_date}</div>
      {poster_path ? (
        <img src={`${IMAGE_URL}w200/${poster_path}`} alt="poster_image" />
      ) : (
        <img src={movie_poster} width="200" alt="" />
      )}
    </div>
  );
}
