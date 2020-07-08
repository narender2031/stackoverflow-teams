const router = require('express').Router()
let Answer = require('../models/answerModel')

//GET all the answers posted by everyone
router.route('/').get((req, res) => {
    Answer.find()
        .then(answers => res.json(answers))
        .catch(err => res.status(400).json({ error : err}))
})

//POST an answer
router.route('/add').post((req, res) => {
    const username = req.username
    const firstName = req.firstName
    const lastName = req.lastName
    const answerBody = req.body.answerBody
    const questionId = req.body.questionId
    const starCount = 0
    const likeCount = 0
    const answerCount = 0

    const newAnswer = new Answer({username, firstName, lastName, answerBody,questionId, starCount, likeCount, answerCount})

    newAnswer.save()
        .then(() => res.json(newAnswer) )
        .catch(err => res.status(400).json({ error : err}))
})

//DELETE an answer
router.route('/delete/:answerId').delete((req, res) => {
    Answer.findByIdAndDelete(req.params.answerId)
        .then(() => res.json("Answer deleted"))
        .catch(err => res.status(400).json({ error : err}))
})

module.exports = router