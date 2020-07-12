import {SET_AUTHENTICATED, LOADING_USER,SET_UNAUTHENTICATED, SET_AUTHENTICATED_USER,SET_OTHER_USER,
    SET_ALL_USER } from '../types'

const initialState = {
    user : {},
    otherUser : {},
    allUsers : [],
    authenticated : false,
    loading : false
}

export default function(state = initialState , action){
    switch(action.type){
        case SET_AUTHENTICATED :
            return {
                ...state,
                authenticated : true
            }
        case SET_UNAUTHENTICATED :
            return {
                ...state,
                authenticated : false
            } 
        case SET_AUTHENTICATED_USER :
            return {
                ...state,
                loading : false,
                user : action.payload
            } 
        case LOADING_USER :
            return {
                ...state,
                loading : true
            }
        case SET_OTHER_USER :
            return {
                ...state,
                otherUser : action.payload
            }
        case SET_ALL_USER :
            return {
                ...state,
                allUsers : action.payload
            }   
        default : 
            return {
                ...state
            }
    }
}