import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { IMAGE_URL } from "../../../config";
import "../../../styles/review.css";

export default function ReviewCard(props) {
  const { reviews } = props;
  return (
    <div className="review_cards">
      {reviews.map((review, i) => {
        const { title, movieId, image } = review;
        return (
          <Card style={{ margin: "10px" }}>
            <CardContent>
              <div key={i} className="review_card">
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
                    <h3>{review.title}</h3>
                  </Link>
                  <img
                    className="review_image"
                    src={`${IMAGE_URL}w200/${review.image}`}
                    alt="poster"
                  />
                </div>
                <p>{review.review}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
