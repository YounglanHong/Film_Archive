const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = mongoose.Schema(
  {
    reviewer: [{ type: Schema.Types.ObjectId, ref: "User" }],
    title: {
      type: String,
    },
    review: {
      type: String,
      maxlength: 100,
    },
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = { Review };
