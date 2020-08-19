const express = require("express");
const router = express.Router();

const { Review } = require("../models/Review");
const { Favorite } = require("../models/Favorite");
const { Watched } = require("../models/Watched");

//* 리뷰 등록
router.post("/addReview", (req, res) => {
  // 클라이언트로부터 영화 데이터를 받아오면,
  const review = new Review(req.body);

  // MongoDB에 저장
  // next
  review.save((err, reviewData) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.status(200).json({ success: true, reviewData });
  });
});

//* favorite 추가
router.post("/addFavorite", (req, res) => {
  const favorite = new Favorite(req.body);

  favorite.save((err, favData) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.status(200).json({ success: true, favData });
  });
});

//* watched 추가
router.post("/addWatched", (req, res) => {
  const watched = new Watched(req.body);

  watched.save((err, watData) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.status(200).json({ success: true, watData });
  });
});

module.exports = router;
