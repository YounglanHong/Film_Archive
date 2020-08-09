const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

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

app.post("/register", (req, res) => {
  // Put Client Login data to MongoDB
  const user = new User(req.body);
  // MongoDB Save & Error Handling
  user.save((err, userData) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.status(200).json({ sucess: true });
  });
});

app.listen(PORT, () => {
  console.log(`app is listening in PORT ${PORT}`);
});
