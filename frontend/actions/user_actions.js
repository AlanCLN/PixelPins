import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUser = (user) => {
    return {
        type: RECEIVE_USER,
        user
    }
}

// const receiveUsers = (users) => {
//     return {
//         type: RECEIVE_USERS,
//         users
//     }
// }

export const fetchUser = (userId) => {
    return (dispatch) => {
        return UserAPIUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)));
    }
}