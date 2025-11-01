const mongoose = require('mongoose');

const referralSchema = new mongoose.Schema({
  tenant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tenant',
    required: true,
  },
  referredEmail: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'successful', 'expired'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Referral', referralSchema);
