import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllWatched } from "../../../action/movieAction";
import { IMAGE_URL } from "../../../config";

import "../../../styles/mymovie.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Watched(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const dispatch = useDispatch();
  const { userId } = props;

  let [watchedMovies, setWatchedMovies] = useState([]);

  useEffect(() => {
    dispatch(getAllWatched({ userId })).then((res) => {
      if (res.payload.watchedMovies) {
        setWatchedMovies(res.payload.watchedMovies);
      }
    });
  }, [dispatch, userId]);
  return (
    <div className="Watched">
      <h2>Watched Movies</h2>
      <Carousel responsive={responsive}>
        {watchedMovies.map((watchedMovie, i) => {
          return (
            <div key={i}>
              <Link
                to={{
                  pathname: `/movie/${watchedMovie.title}`,
                  state: {
                    id: watchedMovie.movieId,
                    title: watchedMovie.title,
                  },
                }}
                className="link"
              >
                <img
                  className="mymovie_image"
                  src={`${IMAGE_URL}w200/${watchedMovie.image}`}
                  alt="poster"
                />
                <h3>{watchedMovie.title}</h3>
              </Link>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
