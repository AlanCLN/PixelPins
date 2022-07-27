import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { updateBoard } from '../../util/board_api_util';
import { deleteBoard } from '../../actions/board_actions';
import { receiveBoard, receiveBoardErrors, removeBoard } from '../../actions/board_actions';

const BoardEditModal = (props) => {

    const { board, currentUserId, pageType } = props;
    const dispatch = useDispatch();

    const [state, setState] = useState({
        id: board.id,
        name: board.name,
        description: board.description || '',
    })

    const [showConfirmDelete, setShowConfirmDelete] = useState(false)

    const handleNameChange = (e) => {
        setState({ ...state, name: e.target.value })
    }

    const handleDescriptionChange = (e) => {
        setState({ ...state, description: e.target.value })
    }

    const handleBoardSubmit = (e) => {
        e.preventDefault();

        updateBoard(state).then(board => {
            dispatch(receiveBoard(board));
            window.location.reload();
        }, err => {
            dispatch(receiveBoardErrors(err.responseJSON))
        })
    }

    const handleDeleteBoard = (e) => {
        e.preventDefault();
        e.stopPropagation();

        dispatch(deleteBoard(board.id))

        if (pageType === 'user-show') {
            window.location.reload();
        } else {
            props.history.push(`/users/${currentUserId}/saved`)
        }

    }

    const handleOpenConfirmDeleteModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setShowConfirmDelete(true);
    }

    const handleCloseConfirmDeleteModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setShowConfirmDelete(false);
    }

    const confirmDeleteModal = () => {
        return (
            <div className="confirm-delete-modal-container">
                <div className="confirm-delete-modal-content">
                    <div className="confirm-delete-title">Are you sure?</div>
                    <div className="confirm-delete-description">
                        Once you delete a board and all its Pins, you can't undo it!
                    </div>
                    <div className="confirm-delete-button-container">
                        <div className="cancel-confirm-delete-button"
                            onClick={handleCloseConfirmDeleteModal}
                        >Cancel</div>
                        <div className="confirm-delete-board-button"
                            onClick={handleDeleteBoard}
                        >Delete forever</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <> 
            {showConfirmDelete &&
            <div className="confirm-delete-modal-background" onClick={handleCloseConfirmDeleteModal}>
                <div className="confirm-delete-modal-child" onClick={e => e.stopPropagation()}>
                    {confirmDeleteModal()}
                </div>
            </div>
            }
            <div className="board-modal-container">
                <h1>Edit Board</h1>
                <div className="board-modal-form-container">
                    <form className="board-modal-form">
                        <label htmlFor="board-name">Name</label>
                        <input
                            id="board-name"
                            type="text"
                            value={state.name}
                            onChange={handleNameChange}
                        />
                        <label htmlFor="board-description">Description</label>
                        <input
                            id="board-name"
                            type="text"
                            value={state.description}
                            onChange={handleDescriptionChange}
                            placeholder="What's your board about?"
                        />
                        {
                            props.errors.map((error, idx) => {
                                return (
                                    <p key={idx}>{error}</p>
                                )
                            })
                        }
                        <div className="board-submit-button-container">
                            <div className="board-submit-button-content">
                                <span onClick={handleOpenConfirmDeleteModal}>Delete</span>
                                <button onClick={handleBoardSubmit}>Done</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default BoardEditModal;