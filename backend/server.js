const express = require('express')

//Cross-Origin-Resource-Sharing
const cors = require('cors')
const mongoose = require('mongoose')

//store environment variables 
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

const usersRouter = require('./routes/users')
const authUsersRouter = require('./routes/authUsers')
const questionsRouter = require('./routes/questions')
const answersRouter = require('./routes/answers')

const mongoAuth = require('./routes/mongoAuth')

//cors middleware
app.use(cors())
app.use(express.json()) //since server will send and receive json

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology : true})
const connection = mongoose.connection

app.use('/api/users' , usersRouter)
app.use('/api/user' , mongoAuth, authUsersRouter)
app.use('/api/questions' , mongoAuth,  questionsRouter)
app.use('/api/answers' , mongoAuth, answersRouter)

connection.once('open' , () => {
    console.log("connected to mongo")
})

//start the server ie. listen to a certain port
app.listen(port , () => {
    console.log(`Server is running on ${port}`)
})

