import React, { useState} from 'react';
import { connect } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/follow_actions';

const FollowButton = props => {

    const { otherUser, currentUser, followUser, unfollowUser } = props
    const [followed, setFollowed] = useState(() => {
        return currentUser.followings.includes(otherUser.id)
    })

    const handleFollowUser = (e) => {
        e.preventDefault();
        setFollowed(!followed)
        followUser(otherUser.id)
    }

    const handleUnFollowUser = (e) => {
        e.preventDefault();
        setFollowed(!followed)
        unfollowUser(otherUser.id)
    }

    const followButton = () => {
        return (
            <button
                className="follow-button"
                onClick={handleFollowUser}
            >Follow</button>
        )
    }

    const unfollowButton = () => {
        return (
            <button
                className="unfollow-button"
                onClick={handleUnFollowUser}
            >Following</button>
        )
    }

    return followed ? unfollowButton() : followButton();
}

const mDTP = (dispatch) => {
    return {
        followUser: (followee_id) => dispatch(followUser(followee_id)),
        unfollowUser: (followee_id) => dispatch(unfollowUser(followee_id))
    }
}

export default connect(null, mDTP)(FollowButton);