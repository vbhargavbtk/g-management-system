const express = require('express');
const router = express.Router();
const { addComplaint } = require('../controllers/complaint.controller.js');

router.post('/add', addComplaint);

module.exports = router;
