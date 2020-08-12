const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  review: {
    type: String,
    maxlength: 100,
  },
  favorite_id: {
    type: Number,
  },
  watch_id: {
    type: Number,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = { Movie };
