const Sequelize = require('sequelize');
const sequelize = require('../configs/sequelize');

class User extends Sequelize.Model {}

User.init({
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    nama: Sequelize.STRING,
    alamat: Sequelize.STRING,
    noHp: Sequelize.STRING
}, {
    sequelize,
    modelName: 'user'
});

module.exports = User;