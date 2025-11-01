const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['manager', 'cook', 'cleaner', 'security'],
    required: true,
  },
  joiningDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Staff', staffSchema);
