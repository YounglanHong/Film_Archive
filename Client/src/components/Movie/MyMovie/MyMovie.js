import React from "react";

import Favorite from "./Favorite";
import Watched from "./Watched";

import "../../../styles/mymovie.css";

export default function MyMovie(props) {
  console.log(props);
  const { userId /* email, name */ } = props;
  return (
    <div className="MyMovie">
      <h1>MyMovies</h1>
      <Favorite userId={userId} />
      <Watched userId={userId} />
    </div>
  );
}
