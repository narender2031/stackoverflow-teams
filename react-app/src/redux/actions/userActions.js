import {SET_AUTHENTICATED , LOADING_USER} from '../types'
import axios from 'axios'

export const signupUser = (newUser, history) => (dispatch) => {
    axios.post('/users/signup', newUser)
        .then(res => {
            console.log(res.data)
            dispatch({
                type : SET_AUTHENTICATED
            })
            history.push('/login')
        })
        .catch(err => {
            console.log(err)
        })
}

export const loginUser = (newUser, history) => (dispatch) => {
    dispatch({
        type : LOADING_USER
    })
    axios.post('/users/login', newUser)
        .then(res => {

            //get the token in return
            console.log(res.data)

            //store the token on local machine, so if page refreshes.. user doesnt have to login again
            setAuthorizationHeader(res.data)
            dispatch({
                type : SET_AUTHENTICATED
            })
            history.push('/home')
        })
        .catch(err => {
            console.log(err)
        })
}

const setAuthorizationHeader = (token) => {   
    const userToken = token
    //store the token on local machine, so if page refreshes.. user doesnt have to login again
    localStorage.setItem('userToken' , userToken )
    axios.defaults.headers.common['Authorization'] = userToken
}

