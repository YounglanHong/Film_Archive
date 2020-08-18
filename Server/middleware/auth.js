const { User } = require("../models/User");

let auth = (req, res, next) => {
  // 인증 처리(Authentication)
  // 클라이언트에서 받아온 쿠키 cookie

  console.log("cookie", req.cookies);
  let token = req.cookies.token;
  // token 복호화 후 user 검색
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    // user 존재하지 않을 경우, 인증 실패
    if (!user) {
      return res.json({ isAuth: false, error: true });
    }

    // user 존재할 경우, 인증 성공
    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
