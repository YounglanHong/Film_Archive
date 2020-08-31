import React from "react";
import { Link } from "react-router-dom";

import { IMAGE_URL } from "../../config";

import "../../styles/movie.css";

export default function NowPlayingList(props) {
  // console.log(props);
  const { id, title, poster_path } = props.nowPlayingMovie;

  let link_path = {
    pathname: `/movie/${title}`,
    state: {
      id: id,
      title: title,
    },
  };

  return (
    <div className="NowPlayingList">
      <div className="list_item">
        <Link to={link_path} className="link">
          <img
            className="list_image"
            src={`${IMAGE_URL}w200/${poster_path}`}
            alt="poster"
          />
          <h4>{title}</h4>
        </Link>
      </div>
    </div>
  );
}
