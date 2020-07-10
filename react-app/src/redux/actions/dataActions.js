import {SET_QUESTIONS, SET_ANSWERS} from '../types'
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