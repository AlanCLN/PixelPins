import React from 'react';
import { Link } from 'react-router-dom';
import FollowButtonContainer from '../buttons/follow_button';
import Avatar from '../user/avatar';

const UserFollowIndexItem = props => {

    const { user, currentUser } = props;

    return (
        <div className="followee-info-container">
            <Link to={`/users/${user.id}/saved`}>
                <div className="followee-info-content">
                    <div className="followee-avatar-container">
                        <Avatar user={user}/>
                    </div>
                    <div className="followee-name-container">
                        <div>{user.username}</div>
                    </div>
                </div>
            </Link>
            {user.id !== currentUser &&
            <div className="followee-button-container">
                <FollowButtonContainer 
                    currentUser={currentUser}
                    otherUser={user}
                />
            </div>
            }
        </div>
    )
}

export default UserFollowIndexItem;