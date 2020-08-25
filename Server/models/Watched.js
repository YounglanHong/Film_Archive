const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const watchedSchema = mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    movieId: {
      type: Number,
    },
    title: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Watched = mongoose.model("Watched", watchedSchema);

module.exports = { Watched };
