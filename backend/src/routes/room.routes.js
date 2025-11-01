const express = require('express');
const router = express.Router();
const { getRooms } = require('../controllers/room.controller.js');

router.get('/', getRooms);

module.exports = router;
