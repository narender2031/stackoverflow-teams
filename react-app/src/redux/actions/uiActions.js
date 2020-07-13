import {SET_NOTIFICATIONS, MARK_ALL_READ} from '../types'
import axios from 'axios'

//get all the questions posted 
export const getNotifications = () => (dispatch) => {
  axios.post('/notifications' )
  .then(res => {
      dispatch({
          type : SET_NOTIFICATIONS,
          payload : res.data
      })
  })
  .catch(err => console.log(err) )
}

//mark all notifications as read 
export const markAllRead = () => (dispatch) => {
  axios.post('/notifications/markAllRead' )
  .then(() => {
      dispatch({
        type : MARK_ALL_READ
      })
  })
  .catch(err => console.log(err) )
}