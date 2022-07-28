import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchPinsOnBoard } from '../../actions/pin_board_actions';
import { filterBoardPins, filterUserBoards } from '../../reducers/selectors';
import Masonry from 'react-masonry-css';
import PinIndexItem from '../pins/pin_index_item';
import Avatar from '../user/avatar';
import { fetchUser } from '../../util/user_api_util';
import { receiveUser } from '../../actions/user_actions';
import { fetchBoard } from '../../util/board_api_util';
import { receiveBoard, fetchUserBoards } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchUserSavedPins } from '../../actions/save_pin_actions';
import BoardEditModalContainer from './board_show_edit_modal';

const BoardShow = (props) => {

    const boardParamsId = props.match.params.boardId
    const dispatch = useDispatch();

    const [user, setUser] = useState('');
    const [showEdit, setShowEdit ] = useState(false);

    useEffect(() => {
        fetchData();
    }, [boardParamsId])

    const { board, boards, pins, currentUserId, openModal } = props

    const fetchData = async () => {
        let board = await fetchBoard(boardParamsId);
        dispatch(receiveBoard(board));
        let user = await fetchUser(board.userId);
        dispatch(receiveUser(user));
        setUser(user)
        props.fetchUserSavedPins(user.id);
        props.fetchPinsOnBoard(boardParamsId);
        props.fetchUserBoards(currentUserId);
    }

    const handleAddPin = (e) => {
        e.preventDefault();
        openModal('add-pin')
    }

    const handleShowEditModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setShowEdit(true);
    }

    const handleCloseEditModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setShowEdit(false);
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
        <>
            {showEdit &&
            <div className="board-modal-background" onClick={handleCloseEditModal}>
                <div className="board-modal-child" onClick={e => e.stopPropagation()}>
                    <BoardEditModalContainer board={board}/> 
                </div>
            </div>
            }
            <div className="board-show-content">
                <div className="board-show-container">
                    <div className="board-show-info">
                        <div className="board-name-container">
                            <h1>{board.name}</h1>
                            <div className="board-show-edit-board-button" onClick={handleShowEditModal}>
                                <img src={window.editButton} alt="" />
                            </div>
                        </div>
                        <div className="board-show-avatar-container">
                            <Avatar user={user} />
                        </div>
                        <h2>{user.username}</h2>
                        {board.description &&
                        <div className="board-description-container">
                            <p>{board.description}</p>
                        </div>
                        }
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
                                    <PinIndexItem
                                        key={idx}
                                        pin={pin}
                                        boards={boards}
                                    />
                                )
                            }) 
                        }
                        </Masonry>
                    </div>
                </div>
            </div>
        </>
    )
}

const mSTP = (state , ownProps) => {
    const boardId = ownProps.match.params.boardId
    return {
        board: state.entities.boards[boardId],
        boards: filterUserBoards(state, state.session.id),
        pins: filterBoardPins(state, boardId),
        boardPinsArray: state.entities.boards[boardId]?.pins,
        currentUserId: state.session.id
    }
}

const mDTP = (dispatch) => {
    return {
        fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
        fetchPinsOnBoard: (boardId) => dispatch(fetchPinsOnBoard(boardId)),
        fetchUserBoards: (userId) => dispatch(fetchUserBoards(userId)),
        fetchUserSavedPins: (userId) => dispatch(fetchUserSavedPins(userId)),
        openModal: (formType) => dispatch(openModal(formType))
    }
}

export default connect(mSTP, mDTP)(BoardShow);