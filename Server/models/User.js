const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

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
    default: 0, // normal user
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

// Encryption
userSchema.pre("save", function (next) {
  let user = this;

  // Condition: Encrypt password only when password is modified
  if (user.isModified("password")) {
    // Encrypt password(https://www.npmjs.com/package/bcrypt)
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

userSchema.methods.checkPassword = function (plainPassword, callback) {
  // Encrypt plain password
  // Compare with hashed password
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    // if (err) return callback(err), callback(null, isMatch);
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

userSchema.methods.createToken = function (callback) {
  let user = this;
  // Create token using jwt
  let token = jwt.sign(user._id.toHexString(), "filmArchive");
  user.token = token;
  user.save(function (err, user) {
    if (err) return callback(err);
    callback(null, user);
  });
};

userSchema.statics.findByToken = function (token, callback) {
  let user = this;

  // Decode token

  jwt.verify(token, "filmArchive", function (err, decoded) {
    // Find user by userId
    // Compare client token with DB stored token

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
