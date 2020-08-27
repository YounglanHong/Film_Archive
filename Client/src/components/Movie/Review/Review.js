import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getReview } from "../../../action/movieAction";
import ReviewCard from "./ReviewCard";

import Grid from "@material-ui/core/Grid";

import "../../../styles/review.css";
import SearchIcon from "@material-ui/icons/Search";

export default function Review(props) {
  const dispatch = useDispatch();

  //? Props from ReviewRoot
  const { reviewer, reviewData } = props;

  let [reviews, setReviews] = useState([]);

  useEffect(() => {
    dispatch(getReview({ reviewer })).then((res) => {
      if (res.payload.reviews) {
        setReviews(res.payload.reviews);
      }
    });
  }, [dispatch, reviewer]);

  return (
    <div className="Review">
      <h1>Reviews</h1>
      <Link
        to="/search"
        className="link"
        style={{
          display: "flex",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <SearchIcon /> Search Movies to Post Reviews
      </Link>
      <Grid container spacing={3}>
        {reviewData
          ? reviewData.map((reviewItem) => {
              const {
                _id,
                createdAt,
                movieId,
                title,
                image,
                review,
              } = reviewItem;
              return (
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  {reviewItem ? (
                    <ReviewCard
                      key={_id}
                      createdAt={createdAt}
                      movieId={movieId}
                      title={title}
                      image={image}
                      review={review}
                      reviewer={reviewer}
                    />
                  ) : (
                    " "
                  )}
                </Grid>
              );
            })
          : ""}
      </Grid>
    </div>
  );
}
