const router = require('express').Router()
let Question = require('../models/questionModel')
let Answer = require('../models/answerModel')

//GET all the questions posted by everyone
router.route('/').get((req, res) => {
    Question.find()
        .then(questions => res.json(questions))
        .catch(err => res.status(400).json({ error : err}))
})

//POST a question
router.route('/add').post((req, res) => {
    const username = req.body.username
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const questionBody = req.body.questionBody
    const starCount = 0
    const likeCount = 0
    const answerCount = 0

    const newQuestion = new Question({username, firstName, lastName, questionBody, starCount, likeCount, answerCount})

    newQuestion.save()
        .then(() => res.json(newQuestion) )
        .catch(err => res.status(400).json({ error : err}))
})

//UPDATE a question
router.route('/update/:questionId').post((req, res) => {
    Question.findById(req.params.questionId)
        .then((question) => {
            question.questionBody = req.body.questionBody

            question.save()
                .then(() => res.json(question) )
                .catch(err => res.status(400).json({ error : err}))
        })
        .catch(err => res.status(400).json({ error : err}))
})

//DELETE a question, if a question is delete , all answers for that questions also will be deleted
router.route('/delete/:questionId').delete((req, res) => {
    Question.findByIdAndDelete(req.params.questionId)
        .then(() => console.log('Question delete done'))
        .catch(err => res.status(400).json({ error : err}))

    Answer.deleteMany({questionId : req.params.questionId})
        .then(() => res.json("Question and Answer deleted"))
        .catch(err => res.status(400).json({ error : err}))
})

module.exports = router