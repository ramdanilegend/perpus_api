<<<<<<< HEAD
module.exports.verifyToken = (req, res, next)=>{
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else{
        res.sendStatus(403);
    }
}
=======
const bearerHeader = req.headers['key']
>>>>>>> 54db6622fe747ab4335bedc3c2da4983fa337913
