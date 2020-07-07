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
        required :true,
    },
    location : {
        type :String,
        required :true,
    },
    starCount : {
        type : Number,
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
    }

},{
    timestamps : true,
    required : true,
})

const User = mongoose.model('User' , userSchema) 

module.exports = User