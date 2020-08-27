import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import { deleteReview } from "../../../action/movieAction";

import { IMAGE_URL } from "../../../config";
import "../../../styles/review.css";

export default function ReviewCard(props) {
  const dispatch = useDispatch();
  let [imageSrc, setImageSrc] = useState("");
  let [date, setDate] = useState("");

  //? Props form Review Component
  const { createdAt, movieId, title, image, review, reviewer } = props;
  let newDate = new Date(createdAt);
  let reviewDate = newDate.toDateString();

  useEffect(() => {
    setImageSrc(`${IMAGE_URL}w1280/${image}`);
    setDate(reviewDate);
  }, [setImageSrc, image, reviewDate]);

  function handleDeleteReview(e) {
    // 새로고침 방지
    e.preventDefault();
    console.log(reviewer, movieId);
    let body = {
      reviewer: reviewer,
      movieId: movieId,
    };
    dispatch(deleteReview(body)).then((res) => {
      console.log(res);
    });
  }

  return (
    <div className="ReviewCards">
      {movieId ? (
        <Card className="review_card" style={{ minHeight: "30vw" }}>
          <Link
            to={{
              pathname: `/movie/${title}`,
              state: {
                id: movieId,
                title: title,
              },
            }}
            className="link"
          >
            <CardMedia
              className="review_image"
              src={imageSrc}
              component="img"
            />
          </Link>
          <CardContent>
            <div className="review_item">
              <Link
                to={{
                  pathname: `/movie/${title}`,
                  state: {
                    id: movieId,
                    title: title,
                  },
                }}
                className="link"
              >
                <Typography component="h5" variant="h5">
                  {title}
                </Typography>
              </Link>
              <Typography
                variant="body1"
                color="textSecondary"
                className="review"
              >
                {review}
              </Typography>
              <Typography
                variant="caption"
                color="textSecondary"
                className="review_createdAt"
              >
                {date}
              </Typography>
            </div>
          </CardContent>
          <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={handleDeleteReview}>
              <DeleteForeverIcon />
            </IconButton>
          </CardActions>
        </Card>
      ) : (
        ""
      )}
    </div>
  );
}
