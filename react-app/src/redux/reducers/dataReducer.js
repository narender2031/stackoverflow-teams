import {SET_QUESTIONS} from '../types'

const initialState = {
   questions : []
}

export default function (state = initialState, action){
   switch(action.type){
       case SET_QUESTIONS : 
            return {
                questions : action.payload,
            }
       default : 
           return {
               ...state
           }
   }
}