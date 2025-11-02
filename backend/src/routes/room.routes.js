const express = require('express');
const router = express.Router();
const { getRooms, createRoom } = require('../controllers/room.controller.js');

router.get('/', getRooms);
router.post('/', createRoom);

module.exports = router;
