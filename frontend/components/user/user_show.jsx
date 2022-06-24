import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Avatar from './avatar';

// class UserShow extends React.Component {
//     constructor(props) {
//         super(props);

//         this.followButton = this.followButton.bind(this);
//     }

//     componentDidMount() {
//         this.props.fetchUser(this.props.match.params.userId)
//     }

//     componentDidUpdate() {
//         this.props.fetchUser(this.props.match.params.userId)
//     }

//     followButton() {
//         (this.props.user.id !== this.props.currentUser.id)
//         ? <button className="follow-button">Follow</button>
//         : null
//     }

//     render() {
//         const { user } = this.props

//         if (!user) return null;

//         return ( 
//             <div className="user-show-page">
//                 <div className="user-show-info">
//                     <Avatar
//                         user={user}
//                     />
//                     <div className="username">
//                         <h1 className="username-header">{user.username}</h1>
//                         <span className="username-handle">{`@${user.username}`}</span>
//                     </div>
//                     <div className="follows-container">
//                         <span>1 following</span>
//                         <div className="follow-divider"></div>
//                         <span>1 followers</span>
//                     </div>
//                     <div className="follow-button-container">
//                         {this.followButton()}
//                     </div>
//                 </div>

//             </div>
//         );
//     }
// }

const UserShow = (props) => {

    const userParamsId = props.match.params.userId

    useEffect(() => {
        props.fetchUser(props.match.params.userId)
    }, [userParamsId]);

    // const followButton = () => {
    //     return (props.user.id !== props.currentUser.id)
    //     ? <button className="follow-button">Follow</button>
    //     : null
    // }

    const { user } = props

    if (!user) return null;

    return ( 
        <div className="user-show-page">
            <div className="user-show-info">
                <Avatar
                    user={user}
                />
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
                    {/* {followButton()} */}
                </div>
                <div className="create-button-container">
                    <Link to="/builder" className="create-button">+</Link>
                </div>
            </div>
            <div className="created-saved-container">
                <div className="show-tab">
                    <NavLink
                        to={`/users/${user.id}/created`}
                        activeClassName='created-tab active-show'
                    >Created</NavLink>
                </div>
                <div className="show-tab">
                    <NavLink
                        to={`/users/${user.id}/saved`}
                        activeClassName='saved-tab active-show'
                    >Saved</NavLink>
                </div>
            </div>
        </div>
    );
}
 
export default UserShow;