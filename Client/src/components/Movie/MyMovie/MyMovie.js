import React, { useState } from "react";

import Favorite from "./Favorite";
import Watched from "./Watched";

// import Paper from "@material-ui/core/Paper";
// import Button from "@material-ui/core/Button";

import "../../../styles/mymovie.css";

export default function MyMovie(props) {
  let [favorite, setFavorite] = useState(true);
  let [watched, setWatched] = useState(false);
  const { userId /* email, name */ } = props;

  function clickFavorite(e) {
    e.preventDefault();
    setFavorite(true);
    setWatched(false);
  }

  function clickWatched(e) {
    e.preventDefault();
    setWatched(true);
    setFavorite(false);
  }

  return (
    <div className="MyMovie">
      <h1 className="mymovie_heading">MyMovies</h1>
      <div className="mymovie_container">
        <div className="mymovie_button">
          <button
            className="mymovie_btn_favor"
            style={
              watched
                ? { backgroundColor: "#e1e1e1" }
                : { backgroundColor: "white" }
            }
            onClick={clickFavorite}
          >
            <strong>Favorite</strong>
          </button>
          <button className="mymovie_btn_watched" onClick={clickWatched}>
            <strong>Watched</strong>
          </button>
        </div>
        <div className="mymovie_contents">
          {favorite ? <Favorite userId={userId} /> : ""}
          {watched ? <Watched userId={userId} /> : ""}
        </div>
      </div>
    </div>
  );
}
