const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Book extends Sequelize.Model {}

Book.init({
    judul: Sequelize.STRING,
    penerbit: Sequelize.STRING,
    pengarang: Sequelize.STRING,
    tanggal_masuk: Sequelize.DATE,
    price: Sequelize.STRING,
    quantity: Sequelize.INTEGER

},{ sequelize, modelName: 'book'});

module.exports = Book;
