const dotenv = require('dotenv');
dotenv.config();

const Book = require('../models/Book');

module.exports.postCreate = (req, res) => {

    Book
    .findOrCreate({
        where: { judul: req.body.judul },
        defaults: {
            judul: req.body.judul,
            penerbit: req.body.penerbit,
            pengarang: req.body.pengarang,
            tanggal_masuk: req.body.tanggal_masuk,
            price: req.body.price,
            quantity: req.body.quantity
        }
    })
        .then((Book)=>{
            res.json(Book);
        })
        .catch((error)=>{
            console.log(error);
        })
}

