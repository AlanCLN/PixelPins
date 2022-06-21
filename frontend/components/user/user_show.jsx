import React from 'react';
import Avatar from './avatar';

class UserShow extends React.Component {
    constructor(props) {
        super(props);

        this.followButton = this.followButton.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
    }

    followButton() {
        (this.props.user.id !== this.props.currentUser.id)
        ? <button className="follow-button">Follow</button>
        : null
    }

    render() { 

        const { user, currentUser } = this.props

        if (!user) return null;

        return ( 
            <div className="user-show-page">
                <div className="user-show-info">
                    <Avatar
                        user={user}
                    />
                    {/* <div className="profile-pic-container">
                        <div>Profile Pic Placeholder</div>
                    </div> */}
                    <div className="username">
                        <h1 className="username-header">{user.username}</h1>
                        <span className="username-handle">{`@${user.username}`}</span>
                    </div>
                    <div className="follows-container">
                        <span>1 following</span>
                        <div className="follow-divider"></div>
                        <span>1 followers</span>
                    </div>
                    <div className="follow-button-container">
                        {this.followButton()}
                    </div>
                </div>

            </div>
        );
    }
}
 
export default UserShow;