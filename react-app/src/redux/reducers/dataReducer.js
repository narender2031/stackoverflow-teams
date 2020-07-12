import {SET_QUESTIONS, LIKE_QUESTION, DISLIKE_QUESTION, SET_SPECIFIC_QUESTION, SET_SPECIFIC_ANSWERS,
     POST_ANSWER, DELETE_QUESTION, POST_QUESTION} from '../types'

const initialState = {
   questions : [],
   specificQuestion : {},
   specificAnswers : []
}

export default function (state = initialState, action){
   switch(action.type){
       case SET_QUESTIONS : 
            return {
                ...state,
                questions : action.payload,
            }
        case LIKE_QUESTION : 
            return {
                ...state,
            }
        case DISLIKE_QUESTION : 
            return {
                ...state,
            }
        case SET_SPECIFIC_QUESTION : 
            return {
                ...state,
                specificQuestion : action.payload,
            }
        case SET_SPECIFIC_ANSWERS : 
            return {
                ...state,
                specificAnswers : action.payload,
            }
        case POST_ANSWER : 
            return {
                ...state,
            }
        case POST_QUESTION : 
            return {
                ...state,
            }
        case DELETE_QUESTION : 
            return {
                ...state,
            }
       default : 
           return {
               ...state
           }
   }
}