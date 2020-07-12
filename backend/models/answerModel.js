const mongoose = require('mongoose')

const Schema = mongoose.Schema

const answerSchema = new Schema({
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
    answerBody : { 
        type : String,
        required : true
    },
    questionId : {
        type : String,
        required : true
    },
    statusCorrect : {
        type : Boolean
    },
    starCount : {
        type : Number
    },
    likeCount : {
        type : Number
    }
},{
    timestamps : true,
})

const Answer = mongoose.model('Answer' , answerSchema) 

module.exports = Answer