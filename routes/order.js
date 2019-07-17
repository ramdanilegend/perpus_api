const express = require('express');

const router = express.Router();

const orderController = require('../controllers/order');
const auth = require('../configs/auth');

router.post('/', auth.verifyToken, orderController.postOrder);

module.exports = router;