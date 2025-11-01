const express = require('express');
const router = express.Router();
const { getPaymentsByTenant } = require('../controllers/payment.controller.js');

router.get('/:tenantId', getPaymentsByTenant);

module.exports = router;
