const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");
const { User } = require("../models/User");

//* 인증
router.get("/auth", auth, (req, res) => {
  // console.log(req.token);
  // console.log(req.user);

  // 인증이 true 일 경우, user 정보 반환
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
  });
});

//* 회원가입
router.post("/register", (req, res) => {
  // 클라이언트로부터 회원가입 데이터를 받아오면,
  const user = new User(req.body);

  // MongoDB에 저장
  // next
  user.save((err, userData) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.status(200).json({ success: true });
  });
});

//* 로그인
router.post("/signin", (req, res) => {
  // 요청된 이메일을 DB에서 탐색
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "이메일이 존재하지 않습니다",
      });
    }
    // 이메일이 존재할 경우, 비밀번호 체크
    user.checkPassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        console.log(isMatch);
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다",
        });
      }
      // 비밀번호도 존재할 경우, token 생성
      user.createToken((err, user) => {
        if (err) {
          return res.status(400).send(err);
        }
        // token을 cookie에 저장
        res
          .cookie("token", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id });
      });
    });
  });
});

//* 로그아웃
router.get("/signout", auth, (req, res) => {
  User.findOneAndUpdate(
    {
      _id: req.user._id,
    },
    { token: "" },
    (err, user) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({ success: true });
    }
  );
});

module.exports = router;
