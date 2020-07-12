const router = require('express').Router()
let Question = require('../models/questionModel')
let Answer = require('../models/answerModel')
let Likes = require('../models/likesModel')
let User = require('../models/userModel')

//GET all the questions posted by everyone
router.route('/').get((req, res) => {
    Question.find()
        .then(questions => res.json(questions))
        .catch(err => res.status(400).json({ error : err}))
})

//GET a particular question
router.route('/:questionId').get((req, res) => {
    Question.findById(req.params.questionId)
        .then(question => res.json(question))
        .catch(err => res.status(400).json({ error : err}))
})

//POST a question
router.route('/add').post((req, res) => {
    const username = req.username
    const firstName = req.firstName
    const lastName = req.lastName
    const questionTitle = req.body.questionTitle
    const questionBody = req.body.questionBody
    const solvedStatus = false
    const starCount = 0
    const likeCount = 0
    const dislikeCount = 0
    const answerCount = 0
    
    const newQuestion = new Question({username, firstName, lastName, questionTitle, questionBody,
        solvedStatus, starCount, likeCount,dislikeCount, answerCount})

    User.find({username : req.username})
    .then((userArray) => {
        userArray.forEach(user => {
            user.leaderboardPosition = user.leaderboardPosition + 10
        
            user.save()
                .then(() => {
                    // console.log(user)
                    newQuestion.save()
                        .then(() => res.json(newQuestion) )
                        .catch(err => res.status(400).json({ error : err}))
                })
                .catch(err => res.status(400).json({ error : err}))
        })
    })
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

//toggle solved/unsolved question status
router.route('/toggleSolvedStatus/:questionId').get((req, res) => {
    Question.findById(req.params.questionId)
        .then(question => {
            //check if the question is posted by the user who had logged in 
            if(req.username === question.username){
                question.solvedStatus = !question.solvedStatus

                question.save()
                    .then(() => res.json(question) )
                    .catch(err => res.status(400).json({ error : err}))
            } else{
                res.json("User unauthorized to perform this action")
            }
        })
        .catch(err => res.status(400).json({ error : err}))

})

//like a question
router.route('/like/:questionId').get((req, res) => {
    const userId = req.userId
    const questionId = req.params.questionId
    const likeState = true

    //check if the question is already liked
    Likes.find({userId : userId , questionId : questionId})
        .then(likesArray => {
            if(likesArray.length > 0){
                likesArray.forEach(likesArrayData => {
                    //check if already liked
                    if (likesArrayData.likeState )
                        res.json("Question already liked")

                    //if question is unliked, change its status to a like
                    else{
                        likesArrayData.likeState = true

                        likesArrayData.save()
                            .then(() => console.log(likesArrayData) )
                            .catch(err => res.status(400).json({ error : err}))
                            
                        Question.findById(questionId)
                            .then((question) => {
                                question.dislikeCount = question.dislikeCount - 1
                                question.likeCount = question.likeCount + 1

                                question.save()
                                    .then(() => res.json(question) )
                                    .catch(err => res.status(400).json({ error : err}))
                            })
                            .catch(err => res.status(400).json({ error : err}))
                    }
                })
            }
            //if question is not liked/disliked earlier, add a like 
            else{
                const newLike = new Likes({userId, questionId, likeState})

                newLike.save()
                    .then(() => console.log(newLike) )
                    .catch(err => res.status(400).json({ error : err}))

                Question.findById(questionId)
                    .then((question) => {
                        question.likeCount = question.likeCount + 1

                        question.save()
                            .then(() => res.json(question) )
                            .catch(err => res.status(400).json({ error : err}))
                    })
                    .catch(err => res.status(400).json({ error : err}))
            }
        })
        .catch(err => res.status(400).json({ error : err}))    
})


//unlike a question
router.route('/dislike/:questionId').get((req, res) => {
    const userId = req.userId
    const questionId = req.params.questionId
    const likeState = false
    
    //check if the question is already unliked
    Likes.find({userId : userId , questionId : questionId})
        .then(likesArray => {
            if(likesArray.length > 0){
                likesArray.forEach(likesArrayData => {
                    //check if already unliked
                    if (!likesArrayData.likeState )
                        res.json("Question already unliked")

                    //if question is liked, change its status to a unlike
                    else{
                        likesArrayData.likeState = false

                        likesArrayData.save()
                            .then(() => console.log(likesArrayData) )
                            .catch(err => res.status(400).json({ error : err}))
                            
                        Question.findById(questionId)
                            .then((question) => {
                                question.dislikeCount = question.dislikeCount + 1
                                question.likeCount = question.likeCount - 1

                                question.save()
                                    .then(() => res.json(question) )
                                    .catch(err => res.status(400).json({ error : err}))
                            })
                            .catch(err => res.status(400).json({ error : err}))
                    }
                })
            }
            //if question is not liked/disliked earlier, add a unlike
            else{
                const newLike = new Likes({userId, questionId, likeState})

                newLike.save()
                    .then(() => console.log(newLike) )
                    .catch(err => res.status(400).json({ error : err}))
                
                Question.findById(questionId)
                    .then((question) => {
                        question.dislikeCount = question.dislikeCount + 1

                        question.save()
                            .then(() => res.json(question) )
                            .catch(err => res.status(400).json({ error : err}))
                    })
                    .catch(err => res.status(400).json({ error : err}))
            }
        })
        .catch(err => res.status(400).json({ error : err}))    
})

module.exports = router