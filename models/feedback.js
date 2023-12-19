const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
  },
  phoneNo: {
    type: Number,
    require: true,
    trim: true,
  },
  message: {
    type: String,
    require: true,
    trim: true,
  },
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);

module.exports = Feedback;
