const Sequelize = require('sequelize');
const sequelize = require('../configs/sequelize');

class Admin extends Sequelize.Model {}

Admin.init({
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    nama: Sequelize.STRING,
    jk: Sequelize.STRING,
    alamat: Sequelize.STRING,
    jabatan: Sequelize.STRING,
    noHp: Sequelize.STRING
}, {
    sequelize,
    modelName: 'admin'
});

module.exports = Admin;