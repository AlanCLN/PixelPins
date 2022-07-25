import * as FollowAPIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOWER_AND_FOLLOWEE_USERS = 'RECEIVE_FOLLOWER_AND_FOLLOWEE_USERS';

export const receiveFollowerAndFolloweeUsers = (users) => {
    return {
        type: RECEIVE_FOLLOWER_AND_FOLLOWEE_USERS,
        users
    }
};

export const followUser = (followee_id) => {
    return (dispatch) => {
        return FollowAPIUtil.followUser(followee_id).then(users => {
            dispatch(receiveFollowerAndFolloweeUsers(users))
        })
    }
}

export const unfollowUser = (followee_id) => {
    return (dispatch) => {
        return FollowAPIUtil.unfollowUser(followee_id).then(users => {
            dispatch(receiveFollowerAndFolloweeUsers(users))
        })
    }
}