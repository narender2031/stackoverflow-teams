import {SET_QUESTIONS} from '../types'
import axios from 'axios'

//get the todo items
export const getQuestions = () => (dispatch) => {
//    dispatch({
//        type : LOADING_DATA
//    })
   axios.get('/questions')
   .then(res => {
       dispatch({
           type : SET_QUESTIONS,
           payload : res.data
       })
   })
   .catch(err => console.log(err) )
}
