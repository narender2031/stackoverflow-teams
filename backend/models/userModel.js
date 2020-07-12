const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username : {
        type : String,
        unique : true,
        trim : true,
        required :true,
        minlength : 3
    },
    password : {
        type : String,
        trim : true,
        required :true,
        minlength : 3
    },
    firstName : {
        type :String,
        required :true,
    },
    lastName : {
        type :String,
        required :true,
    },
    email : {
        type :String,
        required :true,
    },
    title : {
        type :String,
    },
    location : {
        type :String,
    },
    likeCount : {
        type : Number,
    },
    leaderboardPosition : {
        type : Number,
    },
    answerCount : {
        type : Number,
    },
    questionCount : {
        type : Number,
    },
    correctAnswerCount : {
        type : Number,

    }

},{
    timestamps : true,
    required : true,
})

const User = mongoose.model('User' , userSchema) 

module.exports = User