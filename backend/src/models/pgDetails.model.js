const mongoose = require('mongoose');

const pgDetailsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  rules: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model('PgDetails', pgDetailsSchema);
