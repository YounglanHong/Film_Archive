const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const watchedSchema = mongoose.Schema(
  {
    userInfo: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    movieId: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  { timestamps: true }
);

const Watched = mongoose.model("Watched", watchedSchema);

module.exports = { Watched };
