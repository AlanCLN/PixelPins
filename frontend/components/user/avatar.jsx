import React from 'react';

const Avatar = (props) => {

    const { user, image } = props;


    const defaultAvatar = () => {
        return (
            <div className="default-avatar">
                <div>{user.username[0].toUpperCase()}</div>
            </div>
        )
    }

    const uploadedAvator = () => {
        return (
            <div className="profile-pic-container">
                <div>Profile Pic Placeholder</div>
            </div>
        )
    }

    return image ? uploadedAvator() : defaultAvatar();
}

export default Avatar;