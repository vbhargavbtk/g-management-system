const express = require('express');
const router = express.Router();
const { getTodaysFood } = require('../controllers/food.controller.js');

router.get('/today', getTodaysFood);

module.exports = router;
