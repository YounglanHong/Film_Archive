const express = require("express");
const router = express.Router();

const { Review } = require("../models/Review");
const { Favorite } = require("../models/Favorite");
const { Watched } = require("../models/Watched");

//=============================================
//                Review
//=============================================

//* review 등록
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

//* review 삭제
router.post("/deleteReview", (req, res) => {
  Review.findOneAndDelete({
    reviewer: req.body.reviewer,
    movieId: req.body.movieId,
    _id: req.body._id,
  }).exec((err, result) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    res.status(200).json({ success: true, result });
  });
});

//* review 정보 불러오기
router.post("/getReviews", (req, res) => {
  Review.find({ reviewer: req.body.reviewer }).exec((err, reviews) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({ success: true, reviews });
  });
});

//* review 수정

// router.get("/editReview", (req, res) => {
//   Review.findOneAndUpdate();
// });

// router.get("/signout", auth, (req, res) => {
//   User.findOneAndUpdate(
//     {
//       _id: req.user._id,
//     },
//     { token: "" },
//     (err, user) => {
//       if (err) return res.json({ success: false, err });
//       return res.status(200).send({ success: true });
//     }
//   );
// });

//=============================================
//                Favorite
//=============================================

//* favorite 탐색
router.post("/findFavorite", (req, res) => {
  // 해당 영화가 favorite collection에 포함되어 있는지 확인
  Favorite.find({
    movieId: req.body.movieId,
    userId: req.body.userId,
  }).exec((err, result) => {
    if (err) {
      return res.status(400).send(err);
    }
    let isFavorite = false;
    if (result.length !== 0) {
      isFavorite = true;
    }
    res.status(200).json({ success: true, isFavorite: isFavorite });
  });
});

//* favorite 추가
router.post("/addFavorite", (req, res) => {
  const favorite = new Favorite(req.body);

  favorite.save((err, favoriteData) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.status(200).json({ success: true, favoriteData });
  });
});

//* favorite 삭제
router.post("/deleteFavorite", (req, res) => {
  Favorite.findOneAndDelete({
    userId: req.body.userId,
    movieId: req.body.movieId,
  }).exec((err, result) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    res.status(200).json({ success: true, result });
  });
});

//* 모든 favorite 호출
router.post("/getAllFavorite", (req, res) => {
  Favorite.find({ userId: req.body.userId }).exec((err, favoriteMovies) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({ success: true, favoriteMovies });
  });
});

//=============================================
//                Watched
//=============================================

//* watched 탐색
router.post("/findWatched", (req, res) => {
  // 해당 영화가 favorite collection에 포함되어 있는지 확인
  Watched.find({
    movieId: req.body.movieId,
    userId: req.body.userId,
  }).exec((err, result) => {
    if (err) {
      return res.status(400).send(err);
    }
    let isWatched = false;
    if (result.length !== 0) {
      isWatched = true;
    }
    res.status(200).json({ success: true, isWatched: isWatched });
  });
});

//* watched 추가
router.post("/addWatched", (req, res) => {
  const watched = new Watched(req.body);

  watched.save((err, watchedData) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.status(200).json({ success: true, watchedData });
  });
});

//* watched 삭제
router.post("/deleteWatched", (req, res) => {
  Watched.findOneAndDelete({
    userId: req.body.userId,
    movieId: req.body.movieId,
  }).exec((err, result) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    res.status(200).json({ success: true, result });
  });
});

//* 모든 watched 호출
router.post("/getAllWatched", (req, res) => {
  Watched.find({ userId: req.body.userId }).exec((err, watchedMovies) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({ success: true, watchedMovies });
  });
});

module.exports = router;
