const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const secretKey = require("../config/secretKey");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0, // 일반 유저: 0, admin: 1
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

// 암호화(Encryption)
userSchema.pre("save", function (next) {
  let user = this;

  // [조건] 비밀번호가 변경되었을 경우
  if (user.isModified("password")) {
    // 비밀번호 암호화 (https://www.npmjs.com/package/bcrypt)
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

// 비밀번호 체크
userSchema.methods.checkPassword = function (plainPassword, callback) {
  let user = this;
  // 일반 비밀번호(plain password)를 암호화된 비밀번호(hashed password)와 비교
  bcrypt.compare(plainPassword, user.password, function (err, isMatch) {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

// jwt 이용해서 token 생성
userSchema.methods.createToken = function (callback) {
  let user = this;
  let token = jwt.sign(user._id.toHexString(), secretKey.secretKey);
  /* user._id + secretKet = token */
  user.token = token;
  user.save(function (err, user) {
    if (err) return callback(err);
    callback(null, user);
  });
};

userSchema.statics.findByToken = function (token, callback) {
  let user = this;

  // token 복호화

  jwt.verify(token, secretKey.secretKey, function (err, decoded) {
    // user._id를 활용하여 user를 검색하고,
    // 클라이언트에서 가져온 token 과 DB에 저장된 토큰이 일치하는지 확인

    user.findOne(
      {
        _id: decoded,
        token: token,
      },
      function (err, user) {
        if (err) return callback(err);
        callback(null, user);
      }
    );
  });
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
