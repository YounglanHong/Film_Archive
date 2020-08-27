import React from "react";
import { Link } from "react-router-dom";
// import movie_poster from "../images/movie_poster.png";

import { IMAGE_URL } from "../../config";

import "../../styles/search.css";

export default function SearchResult(props) {
  // console.log(props.result.title);
  console.log(props);

  const { id, title, original_title, release_date, poster_path } = props.result;

  return (
    <div className="SearchResult">
      <Link
        to={{
          // pathname: `/movie/${id}/${title}`,
          pathname: `/movie/${title}`,
          state: {
            id: id,
            title: title,
          },
        }}
        className="link"
      >
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
        <h2>{title}</h2>
      </Link>
      <p>{original_title}</p>
      <p>{release_date}</p>
    </div>
  );
}
