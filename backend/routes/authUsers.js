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

//UPDATE user details
router.route('/editUserDetails').post((req, res) => {
    User.findById(req.userId)
        .then((user) => {
            user.firstName = req.body.firstName
            user.lastName = req.body.lastName
            user.bio = req.body.bio
            user.title = req.body.title
            user.location = req.body.location

            user.save()
                .then(() => res.json(user) )
                .catch(err => res.status(400).json({ error : err}))
        })
        .catch(err => res.status(400).json({ error : err}))
})

module.exports = router