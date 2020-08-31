import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { addReview } from "../../../action/movieAction";

import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

//style
const useStyles = makeStyles({
  input_title: {
    margin: "50px 30px 20px 30px",
    backgroundColor: "white",
    border: "1px solid white",
    borderRadius: "0.1em",
  },
  input_text: {
    margin: "0px 30px 10px 30px",
    backgroundColor: "white",
    border: "1px solid white",
    borderRadius: "0.1em",
  },
  button: { margin: "10px 30px 0px 30px" },
});
// theme
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#f4ff81",
      main: "#eeff41",
      dark: "#aeea00",
      contrastText: "#c6ff00",
    },
  },
});

export default function PostReview(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { userId, movieId, image } = props.location.state;

  let [title, setTitle] = useState("");
  let [review, setReview] = useState("");

  useEffect(() => {
    // Movie Link로부터 props로 받은 title 정보
    setTitle(props.location.state.title);
  }, [props.location.state.title]);

  //* review 추가
  function postReview(e) {
    // 새로고침 방지
    e.preventDefault();

    let body = {
      reviewer: userId,
      movieId: movieId,
      title: title,
      image: image,
      review: review,
    };
    dispatch(addReview(body)).then((res) => {
      console.log(res);
    });
  }

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleReview(e) {
    setReview(e.target.value);
  }

  return (
    <div className="PostReview">
      <h1>Review</h1>
      {/* <p>글자수 제한: 100자(띄어쓰기 포함)</p> */}
      <ThemeProvider theme={theme}>
        <div className="postreview_container">
          <TextField
            label="Title"
            variant="filled"
            value={title}
            onChange={handleTitle}
            className={classes.input_title}
          />
          <TextField
            label="Review"
            variant="filled"
            multiline
            autoFocus
            rows="25"
            value={review}
            onChange={handleReview}
            className={classes.input_text}
          />
          <div className="postreview_limit">{review.length}/100</div>
          <Button
            onClick={postReview}
            variant="contained"
            className={classes.button}
          >
            Post Review
          </Button>
        </div>
      </ThemeProvider>
    </div>
  );
}
