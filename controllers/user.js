const bctypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const User = require('../models/User');

module.exports.postRegister = (req, res) => {
    var salt = bctypt.genSaltSync(10);
    var hash = bctypt.hashSync(req.body.password, salt);

    User
        .findOrCreate({
            where: {
                email: req.body.email
            },
            defaults: {
                email: req.body.email,
                password: hash,
                nama: req.body.nama,
                alamat: req.body.alamat,
                tlp: req.body.tlp,
                roles: req.body.roles
            }
        })
        .then((user) => {
            if (user[1] !== false) {
                res.json({
                    message: "Register berhasil",
                    data: user[1]
                });
            } else {
                res.json({
                    message: "Email sudah terdaftar",
                    data: user[1]
                });
            }
        })
        .catch((error) => {
            console.log(error);
        })
}

module.exports.postLogin = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (!user) {
            res.status(400).send('Username tidak ada');
        }

        bctypt.compare(req.body.password, user.get('password'), function (err, isMatch) {
            if (err) {
                res.status(400).send('Password Error');
            };

            if (isMatch) {
                jwt.sign({
                    id: user.get('id'),
                    hakakses: user.get('roles')
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