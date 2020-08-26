const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

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

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// routes
app.use("/api/users", require("./routes/users"));
app.use("/api/movies", require("./routes/movies"));

// production 모드(deploy)이면, 정적인 빌드 폴더로 설정
if (process.env.NODE_ENV === "production") {
  app.use(express.static("Client/build"));

  // index.html에서 모든 페이지 라우트
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../Client", "build", "index.html"));
  });
}

// production 모드와 development 모드 포드 설정
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app is listening in PORT ${PORT}`);
});
