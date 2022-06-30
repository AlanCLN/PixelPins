import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBoard } from '../../actions/board_actions';
import { fetchPinsOnBoard } from '../../actions/pin_board_actions';
import { filterBoardPins } from '../../reducers/selectors';
import Masonry from 'react-masonry-css';
import PinIndexItem from '../pins/pin_index_item';

const BoardShow = (props) => {

    const boardParamsId = props.match.params.boardId

    useEffect(() => {
        props.fetchBoard(boardParamsId);
        props.fetchPinsOnBoard(boardParamsId)
    }, [boardParamsId])

    const { board, pins } = props

    const breakpoints = {
        default: 7,
        1850: 6,
        1630: 5,
        1340: 4,
        1080: 3,
        740: 2,
        500: 1
    }

    if (!board || !pins) return null

    return (
        <div className="board-show-content">
            <div className="board-show-container">
                <div className="board-show-info">

                </div>
                <div className="board-show-pins">
                    <Masonry
                    breakpointCols={breakpoints}
                    className="my-masonry-grid"
                    columnClassName="user-show-my-masonry-grid_column"
                    >
                    {
                        pins.map((pin, idx) => {
                            return (
                                <PinIndexItem
                                    key={idx}
                                    pin={pin}
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

const mSTP = (state , ownProps) => {
    const boardId = ownProps.match.params.boardId
    return {
        board: state.entities.boards[boardId],
        pins: filterBoardPins(state, boardId),
        boardPinsArray: state.entities.boards[boardId]?.pins,
        currentUserId: state.session.id
    }
}

const mDTP = (dispatch) => {
    return {
        fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchPinsOnBoard: (boardId) => dispatch(fetchPinsOnBoard(boardId))
    }
}

export default connect(mSTP, mDTP)(BoardShow);