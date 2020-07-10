const mongoose = require('mongoose')

const Schema = mongoose.Schema

const questionSchema = new Schema({
    username : { 
        type : String,
        required : true 
    }, 
    firstName : {
        type :String,
        required :true,
    },
    lastName : {
        type :String,
        required :true,
    },
    questionTitle : { 
        type : String,
        required : true
    },
    questionBody : { 
        type : String,
        required : true
    }, 
    solvedStatus : { 
        type : Boolean
    },
    starCount : {
        type : Number,
    },
    likeCount : {
        type : Number,
    },
    dislikeCount : {
        type : Number,
    },
    answerCount : {
        type : Number,
    }
},{
    timestamps : true,
})

const Question = mongoose.model('Question' , questionSchema) 

module.exports = Question