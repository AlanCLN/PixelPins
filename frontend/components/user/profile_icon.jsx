import React from 'react';
import { Link } from 'react-router-dom';

const ProfileIcon = (props) => {

    const { currentUser, image } = props

    if (!currentUser) return null
    
    const defaultPic = () => {
        return (
            <div className="avatar-container">
                <Link to={`/users/${currentUser.id}/saved`}>{
                    currentUser.username[0].toUpperCase()
                }</Link>
            </div>
        )
    }

    const uploadedPic = () => {
        return (
            <h1>A</h1>
        )
    }

    return image ? uploadedPic() : defaultPic();
}

export default ProfileIcon;