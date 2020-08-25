import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllFavorite } from "../../../action/movieAction";
import { IMAGE_URL } from "../../../config";

import "../../../styles/mymovie.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Favorite(props) {
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

  let [favorMovies, setFavorMovies] = useState([]);

  useEffect(() => {
    dispatch(getAllFavorite({ userId })).then((res) => {
      console.log(res.payload.favoriteMovies);
      if (res.payload.favoriteMovies) {
        setFavorMovies(res.payload.favoriteMovies);
      }
    });
  }, [dispatch, userId]);
  return (
    <div className="Favorite">
      <h2>Favorite Movies</h2>
      {console.log(favorMovies)}
      <Carousel responsive={responsive}>
        {favorMovies.map((favorMovie, i) => {
          return (
            <div key={i}>
              <Link
                to={{
                  pathname: `/movie/${favorMovie.title}`,
                  state: {
                    id: favorMovie.movieId,
                    title: favorMovie.title,
                  },
                }}
                className="link"
              >
                <img
                  className="mymovie_image"
                  src={`${IMAGE_URL}w200/${favorMovie.image}`}
                  alt="poster"
                />
                <h3>{favorMovie.title}</h3>
              </Link>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
