import React from "react";

import FavoriteList from "./FavoriteList";
import WatchList from "./WatchList";

export default function MyMovie() {
  return (
    <div className="MyMovie">
      <FavoriteList />
      <WatchList />
    </div>
  );
}
