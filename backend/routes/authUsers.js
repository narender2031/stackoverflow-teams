const router = require('express').Router()
const jwt = require('jsonwebtoken')
let User = require('../models/userModel')

router.route('/getAuthenticatedUserData').get((req, res) => {
    User.findById(req.userId)
        .then((user) => {
            res.json(user) 
        })
        .catch(err => res.status(400).json({ error : err}))
})

module.exports = router