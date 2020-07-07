const router = require('express').Router()
let Question = require('../models/questionModel')

router.route('/').get((req, res) => {
    Question.find()
        .then(questions => res.json(questions))
        .catch(err => res.status(400).json({ error : err}))
})

router.route('/add').post((req, res) => {
    const username = req.body.username
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const questionBody = req.body.questionBody
    // const createdAt = Date.parse(req.body.date)
    const starCount = 0
    const likeCount = 0
    const answerCount = 0

    const newQuestion = new Question({username, firstName, lastName, questionBody, starCount, likeCount, answerCount})

    newQuestion.save()
        .then(() => res.json(newQuestion) )
        .catch(err => res.status(400).json({ error : err}))
})

module.exports = router