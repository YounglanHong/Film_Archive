import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllFavorite } from "../../../action/movieAction";

// import MovieStats from "./MovieStats";
import "../../../styles/mymovie.css";

export default function Favorite(props) {
  const dispatch = useDispatch();
  const { userId } = props;

  let [favorMovies, setFavorMovies] = useState([]);

  useEffect(() => {
    dispatch(getAllFavorite({ userId })).then((res) => {
      // console.log(res.payload.favoriteMovies);
      if (res.payload.favoriteMovies) {
        setFavorMovies(res.payload.favoriteMovies);
      }
    });
  }, [dispatch, userId]);

  return (
    <div className="Favorite">
      <ul>
        {favorMovies.map((favorMovie, i) => {
          let link_path = {
            pathname: `/movie/${favorMovie.title}`,
            state: {
              id: favorMovie.movieId,
              title: favorMovie.title,
            },
          };
          return (
            <div key={i}>
              <li>
                <Link
                  to={link_path}
                  // className="link"
                  className="mymovie_list"
                >
                  {favorMovie.title}
                </Link>
              </li>
            </div>
          );
        })}
      </ul>
      {/* </Carousel> */}
    </div>
  );
}
