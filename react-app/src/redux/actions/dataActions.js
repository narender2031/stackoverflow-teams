import {SET_QUESTIONS, SET_ANSWERS, LIKE_QUESTION, DISLIKE_QUESTION,SET_SPECIFIC_QUESTION, SET_SPECIFIC_ANSWERS,
     POST_ANSWER,POST_QUESTION, DELETE_QUESTION, TOGGLE_CORRECT_STATUS} from '../types'
import axios from 'axios'

//get all the questions posted 
export const getQuestions = () => (dispatch) => {
   axios.get('/questions')
   .then(res => {
       dispatch({
           type : SET_QUESTIONS,
           payload : res.data
       })
   })
   .catch(err => console.log(err) )
}

//like a question
export const likeQuestion = (questionId) => (dispatch) => {
    axios.get(`/questions/like/${questionId}`)
    .then(res => {
        dispatch({
            type : LIKE_QUESTION,
            payload : res.data
        })
    })
    .catch(err => console.log(err) )
}

//dislike a question
export const dislikeQuestion = (questionId) => (dispatch) => {
    axios.get(`/questions/dislike/${questionId}`)
    .then(res => {
        dispatch({
            type : DISLIKE_QUESTION,
            payload : res.data
        })
    })
    .catch(err => console.log(err) )
}

//get all the questions posted 
export const getAnswers = () => (dispatch) => {
    axios.get('/answers')
    .then(res => {
        dispatch({
            type : SET_ANSWERS,
            payload : res.data
        })
    })
    .catch(err => console.log(err) )
}

//get specific question
export const getSpecificQuestion = (questionId) => (dispatch) => {
    axios.get(`/questions/${questionId}`)
    .then(res => {
        dispatch({
            type : SET_SPECIFIC_QUESTION,
            payload : res.data
        })
    })
}

//get all answers related to that question
export const getSpecificAnswers = (questionId) => (dispatch) => {
    axios.get(`/answers/${questionId}`)
    .then(res => {
        dispatch({
            type : SET_SPECIFIC_ANSWERS,
            payload : res.data
        })
    })
}

//get all answers related to that question
export const postAnswer = (answerDetails) => (dispatch) => {
    axios.post('/answers/add' , answerDetails)
    .then(res => {
        dispatch({
            type : POST_ANSWER,
            payload : res.data
        })
    })
}

//get all answers related to that question
export const postQuestion = (newQuestion) => (dispatch) => {
    axios.post('/questions/add' , newQuestion)
    .then(res => {
        dispatch({
            type : POST_QUESTION,
            payload : res.data
        })
    })
}

//delete specific question
export const deleteQuestion = (questionId) => (dispatch) => {
    axios.delete(`/questions/delete/${questionId}`)
    .then(() => {
        dispatch({
            type : DELETE_QUESTION,
            payload : questionId
        })
    })
}

//Toggle CorrectStatus onclick
export const toggleCorrectStatus = (answerId) => (dispatch) => {
    axios.get(`/answers/toggleCorrectStatus/${answerId}`)
    .then(() => {
        dispatch({
            type : TOGGLE_CORRECT_STATUS,
            payload : answerId
        })
    })
}
