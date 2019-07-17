const dotenv = require('dotenv');
dotenv.config();

const Book = require('../models/Books');

module.exports.getIndexBooks = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
        if (error) {
            res.json({
                message: error
            });
        } else {
            Books.findAll()
                .then((books) => {
                    if (!books) {
                        res.json({
                            message: "Data Buku Yang Anda Cari Tidak Ada"
                        });
                    } else {
                        res.json({
                            message: "Buku Tersedia",
                            data: books
                        });
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    })
}

module.exports.getOneBook = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
        if (error) {
            res.json({
                message: error
            });
        } else {
            Books.findOne({
                    where: {
                        id: req.params.id
                    }
                })
                .then((books) => {
                    res.json(books);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    })
}

// Create Books
module.exports.postBooks = (req, res) => {
    let values = {
        judul: req.body.judul,
        pengarang: req.body.pengarang,
        penerbit: req.body.penerbit,
        tahun_terbit: req.body.tahun_terbit,
        harga: req.body.harga
    }
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
        if (error) {
            res.json({
                message: error
            });
        } else {
            if (authData.hakakses == 'admin') {
                Books.
                create(values)
                    .then(books => {
                        res.json({
                            message: "Data Berhasil di simpan",
                            data: books
                        });
                    }).catch((error) => {
                        console.log(error);
                    })

            } else {
                res.status(403).send("Anda tidak bisa input data")
            }
        }
    })
}

// Update Books
module.exports.putBooks = (req, res) => {
    let values = {
        judul: req.body.judul,
        pengarang: req.body.pengarang,
        penerbit: req.body.penerbit,
        tahun_terbit: req.body.tahun_terbit,
        harga: req.body.harga
    }

    let conditions = {
        where: {
            id: req.params.id
        }
    }
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
        if (error) {
            res.json({
                message: error
            });
        } else {
            if (authData.hakakses == 'admin') {
                Books
                    .update(values, conditions)
                    .then((books) => {
                        res.json({
                            message: "Data Berhasil di rubah",
                            data: books
                        });
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            } else {
                res.status(403).send("Anda tidak bisa input data")
            }
        }
    })
}

// Delete Books
module.exports.deleteBooks = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
        if (error) {
            res.json({
                message: error
            });
        } else {
            if (authData.hakakses == 'admin') {
                Books
                    .destroy({
                        where: {
                            id: req.params.id
                        }
                    })
                    .then((books) => {
                        if (!books) {
                            res.json({
                                message: "Data tidak ada"
                            });
                        } else {
                            res.json({
                                message: "Data berhasil di hapus"
                            });
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            } else {
                res.status(403).send("Anda tidak bisa hapus data")
            }
        }
    })
}