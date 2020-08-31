import React from "react";
import { Link } from "react-router-dom";

import { IMAGE_URL } from "../../config";

import Typography from "@material-ui/core/Typography";
import "../../styles/search.css";

export default function SearchResult(props) {
  const { id, title, original_title, release_date, poster_path } = props.result;

  return (
    <div className="SearchResult">
      <Link
        to={{
          pathname: `/movie/${title}`,
          state: {
            id: id,
            title: title,
          },
        }}
        className="link"
      >
        {poster_path ? (
          <img
            src={`${IMAGE_URL}w200/${poster_path}`}
            alt="poster_image"
            className="search_image"
          />
        ) : (
          <img
            src="clapperboard.png"
            alt="poster_not_found"
            className="search_image"
          />
        )}
        <Typography variant="h6" className="search_title">
          {title}
        </Typography>
      </Link>
      <div className="search_origin">{original_title}</div>
      <span className="search_date">{release_date}</span>
    </div>
  );
}
