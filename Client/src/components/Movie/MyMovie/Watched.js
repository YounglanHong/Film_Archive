import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllWatched } from "../../../action/movieAction";

import "../../../styles/mymovie.css";

export default function Watched(props) {
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
      {/* <h2>Watched Movies</h2> */}
      <ul>
        {watchedMovies.map((watchedMovie, i) => {
          let link_path = {
            pathname: `/movie/${watchedMovie.title}`,
            state: {
              id: watchedMovie.movieId,
              title: watchedMovie.title,
            },
          };
          return (
            <div key={i}>
              <li>
                <Link to={link_path} className="mymovie_list_watched">
                  {watchedMovie.title}
                </Link>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
