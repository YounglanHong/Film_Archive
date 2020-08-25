import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getReview } from "../../../action/movieAction";
import { IMAGE_URL } from "../../../config";
import ReviewCard from "./ReviewCard";

// import { addReview } from "../../action/movieAction";

import "../../../styles/review.css";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";

export default function Review(props) {
  const dispatch = useDispatch();
  const { reviewer } = props;
  let [reviews, setReviews] = useState([]);

  useEffect(() => {
    // console.log({ reviewer });
    dispatch(getReview({ reviewer })).then((res) => {
      if (res.payload.reviews) {
        setReviews(res.payload.reviews);
      }
    });
  }, [dispatch, reviewer]);
  return (
    <div className="Review">
      <h1>Reviews</h1>
      {console.log(reviews)}
      <Link to="/search" className="link" style={{ display: "flex" }}>
        <RateReviewOutlinedIcon /> PostReview
      </Link>
      <ReviewCard reviews={reviews} />
    </div>
  );
}
