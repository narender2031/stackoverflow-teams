const mongoose = require('mongoose')

const Schema = mongoose.Schema

const likesSchema = new Schema({
    userId : { 
        type : String,
        required : true 
    },
    questionId : {
        type : String,
        required : true
    },
    likeState : {
        type : Boolean,
        required : true
    } 
},{
    timestamps : true,
})

const Likes = mongoose.model('Likes' , likesSchema) 

module.exports = Likes