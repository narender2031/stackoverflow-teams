const router = require('express').Router()
let User = require('../models/userModel')

router.post('/register', (req, res) => {
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

router.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const existingUser = User.findOne({username : username})
    // .then((user) => {
    //     return res.json(user)
    // })
    // .catch(err => res.status(400).json({ error : err})) 

    return res.json(existingUser)
})

module.exports = router