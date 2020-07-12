import {SET_NOTIFICATIONS} from '../types'
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
