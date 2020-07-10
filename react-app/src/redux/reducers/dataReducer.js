import {SET_QUESTIONS,SET_ANSWERS} from '../types'

const initialState = {
   questions : [],
   answers : []
}

export default function (state = initialState, action){
   switch(action.type){
       case SET_QUESTIONS : 
            return {
                ...state,
                questions : action.payload,
            }
        case SET_ANSWERS : 
            return {
                ...state,
                answers : action.payload,
            }
       default : 
           return {
               ...state
           }
   }
}