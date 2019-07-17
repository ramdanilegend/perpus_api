const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Books extends Sequelize.Model {}

Books.init({
    judul: Sequelize.STRING,
    pengarang: Sequelize.STRING,
    penerbit: Sequelize.STRING,
    tahun_terbit: Sequelize.STRING,
    harga: Sequelize.INTEGER
}, {
    sequelize,
    modelName: 'books'
});

module.exports = Books;