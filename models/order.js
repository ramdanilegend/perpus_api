const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');
const books = require('../models/books');
const user = require('../models/user');

class Order extends Sequelize.Model {}

Order.init({
    tanggal_order: Sequelize.STRING
}, {
    sequelize,
    modelName: 'order'
});
// Will also add userId to Task model, but field will be set to `user_id`
// This means column name will be `user_id`
Order.belongsTo(user);
Order.belongsTo(books);

module.exports = Order;