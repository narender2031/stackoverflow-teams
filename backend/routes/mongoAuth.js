const jwt = require('jsonwebtoken')
let User = require('../models/userModel')

module.exports = (req, res, next ) => {
    let idToken = ''

    if(req.headers.authorization){
        idToken = req.header("authorization")
    } else{
        return res.status(403).json({error : "Un-Authorized"})
    }

    const decodedToken = jwt.verify(idToken, process.env.TOKEN_SECRET)
    User.findById(decodedToken._id)
    .then(user => {
        req.username = user.username
        req.userId = user._id
        req.firstName = user.firstName
        req.lastName = user.lastName
        return next()
    })
    .catch(err => {
        return res.status(400).json(err.code)
    })
}