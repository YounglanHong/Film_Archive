import React from "react";
import Movie from "../components/Movie/Movie";

export default function MovieRoot(props) {
  console.log(props.location.state);

  const { id } = props.location.state;
  return (
    <div className="MovieRoot">
      <Movie id={id} />
    </div>
  );
}
