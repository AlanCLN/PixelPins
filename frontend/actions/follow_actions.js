import * as FollowAPIUtil from '../util/follow_api_util';

export const RECEIVE_USERS_FROM_FOLLOWS_TABLE = 'RECEIVE_USERS_FROM_FOLLOWS_TABLE';

export const receiveUsersFromFollowsTable = (users) => {
    return {
        type: RECEIVE_USERS_FROM_FOLLOWS_TABLE,
        users
    }
};

export const followUser = (followee_id) => {
    return (dispatch) => {
        return FollowAPIUtil.followUser(followee_id).then(users => {
            dispatch(receiveUsersFromFollowsTable(users))
        })
    }
}

export const unfollowUser = (followee_id) => {
    return (dispatch) => {
        return FollowAPIUtil.unfollowUser(followee_id).then(users => {
            dispatch(receiveUsersFromFollowsTable(users))
        })
    }
}

export const fetchUserFollowers = (userId) => {
    return (dispatch) => {
        return FollowAPIUtil.fetchUserFollowers(userId).then(users => {
            dispatch(receiveUsersFromFollowsTable(users))
        })
    }
}

export const fetchUserFollowings = (userId) => {
    return (dispatch) => {
        return FollowAPIUtil.fetchUserFollowings(userId).then(users => {
            dispatch(receiveUsersFromFollowsTable(users))
        })
    }
}