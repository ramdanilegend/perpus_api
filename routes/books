const express = require('express');

const router = express.Router();

const booksController = require('../controllers/books');
const auth = require('../configs/auth');

router.get('/:id', auth.verifyToken, booksController.getIndexBooks);
router.post('/',booksController.postbooks)
router.put('/:id',booksController.postbooks)


router.post('/', productController.postProduct);
router.put('/:id', productController.putProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;