import React from "react";
import { Link } from "react-router-dom";

import { IMAGE_URL } from "../../config";

import "../../styles/movie.css";

export default function PopularList(props) {
  console.log(props);
  const { id, title, poster_path } = props.popularMovie;

  return (
    <div className="PopularList">
      <div className="list_items">
        <Link
          to={{
            pathname: `/movie/${id}/${title}`,
            state: {
              id: id,
              title: title,
            },
          }}
          className="link"
        >
          <img
            className="list_image"
            src={`${IMAGE_URL}w200/${poster_path}`}
            alt="poster image"
          />
          <h3>{title}</h3>
        </Link>
      </div>
    </div>
  );
}
