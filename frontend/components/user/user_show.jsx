import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Avatar from './avatar';
import { connect, useDispatch } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchUserBoards } from '../../actions/board_actions';
import { filterUserBoards } from '../../reducers/selectors';
import BoardPreview from '../boards/board_preview';
import FollowButtonContainer from '../buttons/follow_button';
import FollowModalControllerContainer from '../follows/follow_modal_controller';
import { fetchUserFollowers, fetchUserFollowings } from '../../actions/follow_actions';

const UserShow = (props) => {

    const userParamsId = props.match.params.userId
    const dispatch = useDispatch();

    useEffect(() => {  // fetch currentUser
        props.fetchUser(props.currentUser.id)
    }, [])

    useEffect(() => { // fetch user for that profile
        dispatch(closeModal());
        props.fetchUser(userParamsId).then(() => {
            props.fetchUserBoards()
        })
        props.fetchUserFollowers();
        props.fetchUserFollowings();
    }, [userParamsId]);

    const handleOpenModal = (formType) => {
        return e => {
            e.preventDefault();
            props.openModal(formType);
        }
    }
    
    const { user, currentUser, boards } = props

    if (!user || !boards || !currentUser.followings) return null;
    return (
        <div className="user-show-page">
            <div className="user-show-info">
                <div className="user-show-avatar-container">
                    <Avatar
                        user={user}
                    />
                </div>
                <div className="username">
                    <h1 className="username-header">{user.username}</h1>
                    <span className="username-handle">{`@${user.username}`}</span>
                </div>
                <div className="follows-container">
                    <span
                        onClick={handleOpenModal('followings')}
                    >{user.followings.length} following</span>
                    <div className="follow-divider"></div>
                    <span
                        onClick={handleOpenModal('followers')}
                    >{user.followers.length} followers</span>
                </div>
                <FollowModalControllerContainer userId={user.id}/>
                <div className="user-show-follow-button-container">
                    { currentUser.id !== user.id &&
                    <FollowButtonContainer
                        otherUser={user}
                        currentUser={currentUser}
                    />
                    }
                </div>
            </div>
            <div className="board-index-content">
                {
                    boards.map((board, idx) => {
                        return (
                            <BoardPreview
                                openModal={props.openModal}
                                board={board}
                                key={idx}
                            />
                        )
                    })
                }
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
                        <div onClick={() => props.openModal('board')}>Create Board</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mSTP = (state, ownProps) => {
    const userId = ownProps.match.params.userId
    return {
        user: state.entities.users[userId],
        currentUser: state.entities.users[state.session.id],
        boards: filterUserBoards(state, userId)
    }
}

const mDTP = (dispatch, ownProps) => {
    const userId = ownProps.match.params.userId
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchUserBoards: () => dispatch(fetchUserBoards(userId)),
        openModal: (formType) => dispatch(openModal(formType)),
        fetchUserFollowers: () => dispatch(fetchUserFollowers(userId)),
        fetchUserFollowings: () => dispatch(fetchUserFollowings(userId))

    }
}

export default connect(mSTP, mDTP)(UserShow);