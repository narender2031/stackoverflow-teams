import {SET_QUESTIONS, LIKE_QUESTION, DISLIKE_QUESTION, SET_SPECIFIC_QUESTION, SET_SPECIFIC_ANSWERS,
     POST_ANSWER, DELETE_QUESTION,DELETE_ANSWER, POST_QUESTION, TOGGLE_CORRECT_STATUS, UPDATE_QUESTION_TITLE ,
     UPDATE_QUESTION_BODY, UPDATE_ANSWER_BODY} from '../types'

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
            let index = state.questions.findIndex(
                question => question._id === action.payload._id)
            state.questions[index] = action.payload
            return {
                ...state,
            }

        case DISLIKE_QUESTION : 
        let ind = state.questions.findIndex(
            question => question._id === action.payload._id)
        state.questions[ind] = action.payload
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
                specificAnswers : [
                    action.payload,
                    ...state.specificAnswers
                ]
            }

        case POST_QUESTION : 
            return {
                ...state,
                questions : [
                    action.payload,
                    ...state.questions
                ]
            }

        case DELETE_QUESTION : 
        return {
            ...state,
            questions : state.questions.filter((question) => question._id !== action.payload),
            specificQuestion : null
        }

        case DELETE_ANSWER : 
        return {
            ...state,
            specificAnswers : state.specificAnswers.filter((answer) => answer._id !== action.payload)
        }

        case TOGGLE_CORRECT_STATUS : 
        let indx = state.specificAnswers.findIndex(
            answer => answer._id === action.payload)
        state.specificAnswers[indx].statusCorrect = !state.specificAnswers[indx].statusCorrect
            return {
                ...state,
            }
        
        case UPDATE_QUESTION_TITLE : 
        return {
            ...state,
            specificQuestion : action.payload
        }

        case UPDATE_QUESTION_BODY : 
        return {
            ...state,
            specificQuestion : action.payload
        }

        case UPDATE_ANSWER_BODY : 
        let indAns = state.specificAnswers.findIndex(
            answer => answer._id === action.payload._id)
        state.specificAnswers[indAns] = action.payload

        return {
            ...state,
        }

       default : 
           return {
               ...state
           }
   }
}