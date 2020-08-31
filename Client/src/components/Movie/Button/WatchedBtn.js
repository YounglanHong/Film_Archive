import React, { useState, useEffect } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import Tooltip from "@material-ui/core/Tooltip";

import { useDispatch } from "react-redux";
import { addWatched, deleteWatched } from "../../../action/movieAction";

const useStyles = makeStyles({
  link: {
    margin: "10px 30px 0px 30px",
  },
});

export default function WatchedBtn(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { movieId, userId, title, image } = props;
  let [isWatched, setIsWatched] = useState(false);

  let body = {
    movieId: movieId,
    userId: userId,
    title: title,
    image: image,
  };

  useEffect(() => {
    axios.post("/api/movies/findWatched", body).then((res) => {
      if (res.data.isWatched) {
        setIsWatched(res.data.isWatched);
      }
    });
  }, [body]);

  //* watched 추가/삭제
  function handleWatchedBtn() {
    // 클릭 시, isWatched 상태이면 제거
    if (isWatched) {
      dispatch(deleteWatched(body)).then((res) => {
        if (res.payload.success) {
          // isWatched 초기화
          setIsWatched(!isWatched);
        }
      });
    } else {
      // isWatched 상태가 아니면 제거
      dispatch(addWatched(body)).then((res) => {
        if (res.payload.success) {
          // isWatched 초기화
          setIsWatched(!isWatched);
        }
      });
    }
  }

  return (
    <div className="WatchedBtn">
      <div>
        <IconButton className={classes.link} onClick={handleWatchedBtn}>
          {isWatched ? (
            <Tooltip title="Remove from Watched">
              <VisibilityIcon />
            </Tooltip>
          ) : (
            <Tooltip title="Add to Watched">
              <VisibilityOutlinedIcon />
            </Tooltip>
          )}
        </IconButton>
      </div>
    </div>
  );
}
