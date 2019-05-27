const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TripSchema = new Schema({
  line: {
    type: String,
    required: true
  },
  origin: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    default: ""
  },
  start: {
    type: Date,
    default: Date.now()
  },
  end: {
    type: Date,
    default: null
  }
});

module.exports = Trip = mongoose.model("trip", TripSchema, "trips");
