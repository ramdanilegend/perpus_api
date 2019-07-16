const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const User = require('../models/User');

module.exports.postRegister = (req, res) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);

    User
        .findOrCreate({
            where: {
                email: req.body.email
            },
            defaults: {
                email: req.body.email,
                password: hash,
                nama: req.body.nama,
                jk: req.body.jk,
                alamat: req.body.alamat,
                noHp: req.body.noHp
            }
        })
        .then((user) => {
            res.json(user);
        })
        .catch((error) => {
            console.log(error);
        })
}

module.exports.postLogin = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (!user) {
            res.status(400).send('Username tidak ada');
        }

        bcrypt.compare(req.body.password, user.get('password'), function (err, isMatch) {
            if (err) {
                res.status(400).send('Password Error');
            };

            if (isMatch) {
                jwt.sign({
                    id: user.get('id')
                }, process.env.SECRETKEY, (error, token) => {
                    res.json({
                        token: token
                    });
                })
            } else {
                res.status(400).send('Wrong Password');
            }
        })
    })
}