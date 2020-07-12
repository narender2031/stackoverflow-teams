const mongoose = require('mongoose')

const Schema = mongoose.Schema

const notificationSchema = new Schema({
    username : { 
        type : String,
        required : true 
    },
    usernameTagged : { 
        type : String,
        required : true 
    },
    questionTitle : { 
        type : String,
        required : true
    }, 
    readStatus : { 
        type : Boolean
    }
},{
    timestamps : true,
})

const Notification = mongoose.model('Notification' , notificationSchema) 

module.exports = Notification
