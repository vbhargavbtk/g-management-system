const express = require('express');
const router = express.Router();
const { addAnnouncement } = require('../controllers/announcement.controller.js');

router.post('/add', addAnnouncement);

module.exports = router;
