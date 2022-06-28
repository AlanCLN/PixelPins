import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Avatar from './avatar';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';


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

    const handleOpenModal = (formType) => {
        return e => {
            e.preventDefault();
            props.openModal(formType);
        }
    }
    

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
            <div className="create-button-container">
                <div className="create-dropdown-btn">+
                    <div className="dropdown-content">
                        <Link to="/builder" className="create-button">Create Pin</Link>
                        <div onClick={handleOpenModal('board')}>Create Board</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mSTP = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId]
    }
}

const mDTP = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        openModal: (formType) => dispatch(openModal(formType))
    }
}

export default connect(mSTP, mDTP)(UserShow);