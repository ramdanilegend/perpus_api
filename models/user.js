const Sequelize = require('sequelize');
const sequelize = require('../configs/sequelize');

class User extends Sequelize.Model {}

User.init({
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    nama: Sequelize.STRING,
    alamat: Sequelize.STRING,
    tlp: Sequelize.STRING,
    roles: Sequelize.STRING
}, {
    sequelize,
    modelName: 'user'
});

module.exports = User;