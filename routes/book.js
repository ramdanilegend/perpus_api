const express = require('express');

const BookController = require('../controllers/Book');

const router = express.Router();

router.post('/create', BookController.postCreate);

module.exports = router