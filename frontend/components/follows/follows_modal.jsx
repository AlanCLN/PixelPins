import React from 'react';
import UserFollowIndexItem from './user_follow_index_item';

const FollowsModal = props => {

    const { modalType, filteredUsers, currentUser } = props;

    return (
        <div className="follows-modal-container">
            <div className="follows-modal-content">
                <div className="follows-modal-title">
                    <span>{modalType}</span>
                </div>
                <div className="follows-modal-index-container">
                    <div className="follows-modal-index-content">
                        {
                        filteredUsers.map(user => {
                            return (
                                <UserFollowIndexItem 
                                    currentUser={currentUser}
                                    user={user}
                                    key={user.id}
                                />
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FollowsModal;