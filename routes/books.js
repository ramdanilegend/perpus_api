const express = require('express');

const router = express.Router();

const booksController = require('../controllers/books');
const auth = require('../configs/auth');

router.get('/:id', auth.verifyToken, booksController.getOneBook);

router.get('/', auth.verifyToken, booksController.getIndexBooks);

router.post('/', auth.verifyToken, booksController.postBooks);

router.put('/:id', auth.verifyToken, booksController.putBooks);

router.delete('/:id', auth.verifyToken, booksController.deleteBooks);

module.exports = router;