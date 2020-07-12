import {SET_NOTIFICATIONS} from '../types'

const initialState = {
  notifications : []
}

export default function (state = initialState, action){
  switch(action.type){
      case SET_NOTIFICATIONS : 
           return {
               ...state,
               notifications : action.payload,
           }
      default : 
          return {
              ...state
          }
  }
}