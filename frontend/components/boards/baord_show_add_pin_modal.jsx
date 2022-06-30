import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { filterUserSavedPins } from '../../reducers/selectors';
import { fetchUserSavedPins } from '../../actions/save_pin_actions';
import Masonry from 'react-masonry-css';
import MiniPinContainer from '../pins/mini_pin';
import { fetchBoard } from '../../actions/board_actions';

const AddPinModal = (props) => {

    const boardParamsId = props.match.params.boardId

    const { pins, board, fetchBoard } = props

    useEffect(() => {
        fetchBoard(boardParamsId);
    })

    if (!pins || !board) return null

    const breakpoints = {
        default: 3,
    }

    return (
        <div className="add-pin-content">
            <div className="add-pin-container">
                <div className="saved-pins-title">
                    <span>Saved Pins</span>
                </div>
                <div className="saved-pins-content">
                <Masonry
                    breakpointCols={breakpoints}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid-column"
                >
                    {
                        pins.map((pin, idx) => {
                            return (
                                <MiniPinContainer
                                    pin={pin}
                                    board={board}
                                    key={idx}
                                />
                            )
                        })
                    }
                </Masonry>
                </div>
            </div>
        </div>
    )
}

const mSTP = (state, ownProps) => {
    const currentUserId = state.session.id
    return {
        pins: filterUserSavedPins(state, currentUserId),
        board: state.entities.boards[ownProps.match.params.boardId]
    }
}

const mDTP = (dispatch) => {
    return {
        fetchUserSavedPins: (userId) => dispatch(fetchUserSavedPins(userId)),
        fetchBoard: (boardId) => dispatch(fetchBoard)
    }
}

export default withRouter(connect(mSTP, mDTP)(AddPinModal));