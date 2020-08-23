import React from "react";

import Favorite from "./Favorite";
import Watched from "./Watched";

export default function MyMovie() {
  return (
    <div className="MyMovie">
      <Favorite />
      <Watched />
    </div>
  );
}
