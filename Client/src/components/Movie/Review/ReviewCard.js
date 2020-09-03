import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import EditIcon from "@material-ui/icons/Edit";

import { deleteReview, editReview } from "../../../action/movieAction";

import { IMAGE_URL } from "../../../config";
import "../../../styles/review.css";

export default function ReviewCard(props) {
  const dispatch = useDispatch();

  //? Props form Review Component
  const { _id, createdAt, movieId, title, image, review, reviewer } = props;

  let [isEdit, setIsEdit] = useState(false);
  let [editing, setEditing] = useState("");

  // review date
  let newDate = new Date(createdAt);
  let reviewDate = newDate.toDateString();

  function handleDeleteReview(e) {
    // 새로고침 방지
    e.preventDefault();
    console.log(reviewer, movieId);
    let body = {
      reviewer: reviewer,
      movieId: movieId,
      _id: _id,
    };
    dispatch(deleteReview(body)).then((res) => {
      console.log(res);
    });
  }

  function handleEditReview(e) {
    // 새로고침 방지
    e.preventDefault();

    let body = {
      _id: _id,
      review: editing,
    };
    dispatch(editReview(body)).then((res) => {
      console.log(res);
    });
  }

  function handleEditChange(e) {
    setEditing(e.target.value);
  }

  function startEdit(e) {
    // 새로고침 방지
    e.preventDefault();
    setIsEdit(true);
  }

  function stopEdit(e) {
    // 새로고침 방지
    e.preventDefault();
    handleEditReview(e);

    setIsEdit(false);
  }

  let link_path = {
    pathname: `/movie/${title}`,
    state: {
      id: movieId,
      title: title,
    },
  };

  return (
    <div className="ReviewCards">
      {/* {console.log(props)} */}
      {movieId ? (
        <Card className="review_card" style={{ minHeight: "30vw" }}>
          <Link to={link_path} className="link">
            <CardMedia
              className="review_image"
              src={`${IMAGE_URL}w1280/${image}`}
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
              {isEdit ? (
                <textarea
                  className="review_edit"
                  rows="5"
                  cols="25"
                  onChange={handleEditChange}
                  defaultValue={review}
                />
              ) : (
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className="review"
                >
                  {review}
                </Typography>
              )}

              <Typography
                variant="caption"
                color="textSecondary"
                className="review_createdAt"
              >
                {reviewDate}
              </Typography>
            </div>
          </CardContent>
          <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
            {isEdit ? (
              <IconButton onClick={stopEdit}>
                <CheckCircleIcon />
              </IconButton>
            ) : (
              <IconButton onClick={startEdit}>
                <EditIcon />
              </IconButton>
            )}

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
