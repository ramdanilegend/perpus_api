const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Books extends Sequelize.Model {}

Books.init({
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    price: Sequelize.INTEGER
}, {
    sequelize,
    modelName: 'books'
});

module.exports = Books;