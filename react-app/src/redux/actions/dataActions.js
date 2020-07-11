import {SET_QUESTIONS, SET_ANSWERS, LIKE_QUESTION, DISLIKE_QUESTION,SET_SPECIFIC_QUESTION, SET_SPECIFIC_ANSWERS} from '../types'
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

