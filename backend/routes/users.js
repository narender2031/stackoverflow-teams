const router = require('express').Router()
let User = require('../models/userModel')

//get details of a single user, using their username 
router.route('/:username').get((req, res) => {
    User.find({username : req.params.username})
        .then(user => res.json(user))
        .catch(err => res.status(400).json({ error : err}))
})

//UPDATE user details
router.route('/update/:userId').post((req, res) => {
    User.findById(req.params.userId)
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

//signup a user
router.route('/signup').post((req, res) => {
    const username = req.body.username
    const password = req.body.password
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const bio = req.body.bio
    const title = req.body.title
    const location = req.body.location
    const starCount = 0
    const likeCount = 0
    const leaderboardPosition = 0
    const answerCount = 0
    const questionCount = 0

    const newUser = new User({username, password, firstName, lastName, email, bio, title, location, starCount, likeCount, leaderboardPosition, questionCount, answerCount})

    newUser.save()
        .then(() => res.json(newUser))
        .catch(err => res.status(400).json({ error : err}))
})

module.exports = router