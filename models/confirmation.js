const mongoose = require("mongoose");

// Get the Schema constructor
const Schema = mongoose.Schema;

const confirmation = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  foodName: {
    type: String,
    required: true
  },
  foodDesc: {
    type: String,
    required: true
  },
  foodUrl: {
    type: String,
    required: true
  },
  Acceptance: {
    type: Boolean,
    required: false
  }
});

// Create model from the schema
module.exports = mongoose.model("Confirmation", confirmation);
