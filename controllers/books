const Books = require('../models/books');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

module.exports.getIndexBooks = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
        if (error) {
            res.json({
                message: error
            });
        } else {
            Books.findAll({
                    where: {
                        id: req.params.id
                    }
                })
                .then((product) => {
                    res.json(product);
                })
                .catch((error) => {
                    console.log(error);
                })

        }

    })
    Books.crete({
        judul :req.body.judul,
        price:req,body,price

        })
        .then((Books)=>{
        res.json(Books);
        })
        .catch((error)=>{
        throw error;
    })
<<<<<<< HEAD
    
=======
}
module.exports.postProduct = (req, res) => {
    let values = {
         name: req.body.name,
         price: req.body.price
        }
    
     Product
        .create(values)
         .then((product) => {
             res.json(product);
         }).catch((error) => {
             console.log(error);
          })
 }

module.exports.deleteProduct = (req, res) => {
    Product
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then((product) => {
            res.json(product);
        })
        .catch((error) => {
            console.log(error);
        })

>>>>>>> b3f2517bd136ce0d24ce73a0b3a82ffb96550491
}