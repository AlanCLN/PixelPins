export const followUser = (followee_id) => {
    return $.ajax({
        method: 'POST',
        url: '/api/follows',
        data: { followee_id }
    })
}

export const unfollowUser = (followee_id) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/follows/${followee_id}`,
        data: { followee_id }
    })
}

export const fetchUserFollowers = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/follows`,
        data: {
            followee_id: userId
        }
    })
}

export const fetchUserFollowings = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/follows`,
        data: {
            follower_id: userId
        }
    })
}