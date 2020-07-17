const router = require('express').Router()
let Answer = require('../models/answerModel')
let Question = require('../models/questionModel')
let User = require('../models/userModel')

//GET all the answers posted by everyone
router.route('/').get((req, res) => {
    Answer.find().sort({ likeCount : -1 })
        .then(answers => res.json(answers))
        .catch(err => res.status(400).json({ error : err}))
})

//GET all the answers for a particular questionId
router.route('/:questionId').get((req, res) => {
    Answer.find({questionId : req.params.questionId})
        .then(answers => res.json(answers))
        .catch(err => res.status(400).json({ error : err}))
})

//GET all the answers for a particular questionId
router.route('/toggleCorrectStatus/:answerId').get((req, res) => {
    Answer.findById(req.params.answerId)
        .then(answer => {
            answer.statusCorrect = !answer.statusCorrect
            answer.save()
                .then(() =>{
                    Question.findById(answer.questionId)
                        .then(question => {
                            if(answer.statusCorrect)
                                question.solvedStatus = true
                            else
                                question.solvedStatus = false

                            question.save()
                                .then(() => {})
                                .catch(err => res.status(400).json({ error : err}))
                        })
                        .catch(err => res.status(400).json({ error : err}))
                })
                .catch(err => res.status(400).json({ error : err}))

        })
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
    const statusCorrect = false
    
    Question.findById(req.body.questionId)
        .then((question) => {

            const newAnswer = new Answer({username, firstName, lastName, answerBody,questionId, starCount, likeCount, statusCorrect})

            //check if the person who has posted the question is not answering it
            if(req.username === question.username){
                res.status(403).json({ error : "Bad request"})
            } else{
                question.answerCount = question.answerCount + 1
                
                question.save()
                    .then(() => {
                        User.find({username : req.username})
                            .then((userArray) => {
                                userArray.forEach(user => {
                                    user.leaderboardPosition = user.leaderboardPosition + 20
                                    user.answerCount =  user.answerCount + 1
                                    user.save()
                                        .then(() => {
                                            newAnswer.save()
                                                .then(() => res.json(newAnswer) )
                                                .catch(err => res.status(400).json({ error : err}))
                                        })
                                        .catch(err => res.status(400).json({ error : err}))
                                })
                            })
                            .catch(err => res.status(400).json({ error : err}))
                    })
                    .catch(err => res.status(400).json({ error : err }))
            }
        })
        .catch(err => res.status(400).json({ error : err}))
    
    
})

//UPDATE a answer body
router.route('/updateAnswerBody/:answerId').post((req, res) => {
    Answer.findById(req.params.answerId)
        .then((answer) => {
            answer.answerBody = req.body.answerBody

            answer.save()
                .then(() => res.json(answer) )
                .catch(err => res.status(400).json({ error : err}))
        })
        .catch(err => res.status(400).json({ error : err}))
})

//DELETE an answer
router.route('/delete/:answerId').delete((req, res) => {
    Answer.findByIdAndDelete(req.params.answerId)
        .then(() => res.json("Answer deleted"))
        .catch(err => res.status(400).json({ error : err}))
})

module.exports = router