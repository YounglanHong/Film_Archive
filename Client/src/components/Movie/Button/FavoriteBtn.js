import React, { useState, useEffect } from "react";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Tooltip from "@material-ui/core/Tooltip";

import { useDispatch } from "react-redux";
import { addFav, deleteFav } from "../../../action/movieAction";

export default function FavoriteBtn(props) {
  const dispatch = useDispatch();
  const { movieId, userId, title, image } = props;
  let [isFavorite, setIsFavorite] = useState(false);

  let body = {
    movieId: movieId,
    userId: userId,
    title: title,
    image: image,
  };

  useEffect(() => {
    axios.post("/api/movies/findFavorite", body).then((res) => {
      if (res.data.isFavorite) {
        setIsFavorite(res.data.isFavorite);
      }
    });
  }, [body]);

  //* favorite 추가/삭제
  function handleFavoriteBtn() {
    // 클릭 시, isFavorite 상태이면 제거
    console.log(isFavorite);
    if (isFavorite) {
      dispatch(deleteFav(body)).then((res) => {
        if (res.payload.success) {
          // isFavorite 초기화
          setIsFavorite(!isFavorite);
        }
      });
    } else {
      // isFavorite 상태가 아니면 추가
      dispatch(addFav(body)).then((res) => {
        if (res.payload.success) {
          // isFavorite 초기화
          setIsFavorite(!isFavorite);
        }
      });
    }
  }

  return (
    <div className="FavoriteBtn">
      <div>
        <IconButton onClick={handleFavoriteBtn}>
          {isFavorite ? (
            <Tooltip title="Remove from Favorite">
              <FavoriteIcon />
            </Tooltip>
          ) : (
            <Tooltip title="Add to Favorite">
              <FavoriteBorderIcon />
            </Tooltip>
          )}
        </IconButton>
      </div>
    </div>
  );
}
