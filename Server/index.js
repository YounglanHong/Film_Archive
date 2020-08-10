const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { auth } = require("./middleware/auth");
const { User } = require("./models/User");

const config = require("./config/key");

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("error", err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/api/users/register", (req, res) => {
  // Put user's login data to MongoDB
  const user = new User(req.body);

  // MongoDB save
  // next
  user.save((err, userData) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.status(200).json({ sucess: true });
  });
});

app.post("/api/users/login", (req, res) => {
  // Search requested email from MongoDB
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "이메일이 존재하지 않습니다",
      });
    }
    // (If email exists,) Check password
    user.checkPassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        // console.log(isMatch);
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다",
        });
      }
      // (If password matches,) Create Token
      user.createToken((err, user) => {
        if (err) {
          return res.status(400).send(err);
        }
        // Save token to cookie
        res
          .cookie("token", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id });
      });
    });
  });
});

app.get("/api/users/auth", auth, (req, res) => {
  console.log(req.token);
  console.log(req.user);

  // If auth is true,
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

app.get("/api/users/logout", auth, (req, res) => {
  User.findOneAndUpdate(
    {
      _id: req.user._id,
    },
    { token: "" },
    (err, user) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({ sucess: true });
    }
  );
});

app.listen(PORT, () => {
  console.log(`app is listening in PORT ${PORT}`);
});
