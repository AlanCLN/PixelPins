import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchUserSavedPins } from '../../actions/save_pin_actions';
import { filterUserSavedPins } from '../../reducers/selectors';
import Masonry from 'react-masonry-css';
import PinIndexItem from '../pins/pin_index_item';
import { filterUserBoards } from '../../reducers/selectors';
import { fetchUserBoards } from '../../actions/board_actions';
import BoardPreview from '../boards/board_preview';

const UserShowSaved = (props) => {

    const userParamsId = props.match.params.userId
    
    useEffect(() => {
        props.fetchUserSavedPins(userParamsId);
        props.fetchUserBoards();
    }, [userParamsId, props.userSavedPinsArray])

    const { user, pins, boards, currentUser } = props

    const breakpoints = {
        default: 7,
        1850: 6,
        1630: 5,
        1340: 4,
        1080: 3,
        740: 2,
        500: 1
    }

    if (!user || !pins || !boards) return null

    return (
        <div className="saved-content">
            <div className="board-index-content">
                {
                    boards.map((board, idx) => {
                        return (
                            <BoardPreview
                                openModal={props.openModal}
                                board={board}
                                key={idx}
                                currentUser={currentUser}
                                user={user}
                            />
                        )
                    })
                }
            </div>
            <div className="unorganized-ideas-title">
                Unorganized ideas
            </div>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="user-show-my-masonry-grid_column"
            >
                {
                    pins.map((pin, idx) => {
                        return (
                            <PinIndexItem
                                boards={boards}
                                key={idx}
                                pin={pin}
                            />
                        )
                    }) 
                }
            </Masonry>
        </div>
    )
}

const mSTP = (state, ownProps) => {
    const userId = ownProps.match.params.userId
    return {
        user: state.entities.users[userId],
        currentUser: state.entities.users[state.session.id],
        pins: filterUserSavedPins(state, userId),
        boards: filterUserBoards(state, userId),
        userSavedPinsArray: state.entities.users[userId]?.savedPins
    }
}

const mDTP = (dispatch, ownProps) => {
    const userId = ownProps.match.params.userId
    return {
        fetchUserBoards: () => dispatch(fetchUserBoards(userId)),
        fetchUserSavedPins: (userId) => dispatch(fetchUserSavedPins(userId)),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}

export default connect(mSTP, mDTP)(UserShowSaved);