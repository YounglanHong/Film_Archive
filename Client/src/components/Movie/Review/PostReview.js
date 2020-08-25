import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { addReview } from "../../../action/movieAction";

export default function PostReview(props) {
  const dispatch = useDispatch();
  const { userId, movieId, image } = props.location.state;
  // console.log(userId);

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
    <div className="Reveiw">
      <div>Review</div>
      <p>글자수 제한: 100자(띄어쓰기 포함)</p>
      <label>Title</label>
      <input type="text" value={title} onChange={handleTitle} />
      <label>Review</label>
      <input type="text" value={review} onChange={handleReview} />
      <button onClick={postReview}>Post Review</button>
    </div>
  );
}
