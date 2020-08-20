import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// import { addReview } from "../../action/movieAction";

export default function Review(props) {
  //

  return (
    <div className="Reveiw">
      <div>Review</div>
      <Link to="/search">PostReview</Link>
    </div>
  );
}
