import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchPinsOnBoard } from '../../actions/pin_board_actions';
import { filterBoardPins } from '../../reducers/selectors';
import Masonry from 'react-masonry-css';
import PinIndexItem from '../pins/pin_index_item';
import Avatar from '../user/avatar';
import { fetchUser } from '../../util/user_api_util';
import { receiveUser } from '../../actions/user_actions';
import { fetchBoard } from '../../util/board_api_util';
import { receiveBoard } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchUserSavedPins } from '../../actions/save_pin_actions';
import BoardShowPinContainer from '../pins/board_show_pin';

const BoardShow = (props) => {

    const boardParamsId = props.match.params.boardId
    const dispatch = useDispatch();

    const [user, setUser] = useState('');

    useEffect(() => {
        fetchData();
    }, [boardParamsId])

    const { board, pins, currentUserId, openModal } = props

    const fetchData = async () => {
        let board = await fetchBoard(boardParamsId);
        dispatch(receiveBoard(board));
        let user = await fetchUser(board.userId);
        dispatch(receiveUser(user));
        setUser(user)
        props.fetchUserSavedPins(user.id);
        props.fetchPinsOnBoard(boardParamsId);
    }

    const handleAddPin = (e) => {
        e.preventDefault();
        openModal('add-pin')
    }

    const breakpoints = {
        default: 7,
        1850: 6,
        1630: 5,
        1340: 4,
        1080: 3,
        740: 2,
        500: 1
    }

    if (!board || !pins || !user) return null

    return (
        <div className="board-show-content">
            <div className="board-show-container">
                <div className="board-show-info">
                    <div className="board-name-container">
                        <h1>{board.name}</h1>
                        <span className="edit-board-button">
                            <img src={window.editButton} alt="" />
                        </span>
                    </div>
                    <Avatar user={user} />
                    <h2>{user.username}</h2>
                    {board.userId === currentUserId &&
                        <div className="add-pin-to-board-button">
                            <button onClick={handleAddPin}>Add Pins</button>
                        </div>
                    }
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
                                <BoardShowPinContainer
                                    key={idx}
                                    pin={pin}
                                    board={board}
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
        fetchPinsOnBoard: (boardId) => dispatch(fetchPinsOnBoard(boardId)),
        fetchUserSavedPins: (userId) => dispatch(fetchUserSavedPins(userId)),
        openModal: (formType) => dispatch(openModal(formType))
    }
}

export default connect(mSTP, mDTP)(BoardShow);