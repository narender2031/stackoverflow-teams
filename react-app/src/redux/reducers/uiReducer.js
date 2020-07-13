import {SET_NOTIFICATIONS, MARK_ALL_READ} from '../types'

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

      case MARK_ALL_READ : 
        state.notifications.forEach(notification => {
          notification.readStatus = true  
        })
        return {
          ...state,
        }
        
      default : 
          return {
              ...state
          }
  }
}