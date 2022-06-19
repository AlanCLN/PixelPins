import { postUser, postSession, deleteSession } from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    }
}

const receiveSessionErrors = (errors) => {  // errors will be in the form of an array
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}

const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}


export const createNewUser = formUser => dispatch => {
    return postUser(formUser).then(user => 
        dispatch(receiveCurrentUser(user)), err => 
        dispatch(receiveSessionErrors(err.responseJSON)));
}

export const login = formUser => dispatch => {
    return postSession(formUser).then(user =>
        dispatch(receiveCurrentUser(user)), err =>
        dispatch(receiveSessionErrors(err.responseJSON)));
}

export const logout = () => dispatch => {
    return deleteSession().then(() =>
        dispatch(logoutCurrentUser()));
}