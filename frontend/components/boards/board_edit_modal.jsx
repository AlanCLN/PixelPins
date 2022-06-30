import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect, useDispatch } from "react-redux";
// import { createBoard } from '../../actions/board_actions';
import { createBoard } from '../../util/board_api_util';
import { receiveBoard, receiveBoardErrors } from '../../actions/board_actions';

const BoardForm = (props) => {

    const [state, setState] = useState({
        name: ''
    })
    const dispatch = useDispatch();

    const handleNameChange = (e) => {
        setState({...state, name: e.target.value})
    }

    const handleBoardSubmit = (e) => {
        e.preventDefault();

        createBoard(state).then(board => {
            dispatch(receiveBoard(board));
            props.history.push(`/boards/${board.id}`)
        }, err => {
            dispatch(receiveBoardErrors(err.responseJSON))
        })

    }

    return (
        <div className="board-modal-container">
            <h1>Create Board</h1>
            <div className="board-modal-form-container">
                <form className="board-modal-form">
                    <label htmlFor="board-name">Name</label>
                    <input
                        id="board-name"
                        type="text"
                        value={state.name}
                        onChange={handleNameChange}
                        placeholder='Like "Places to Go" or "Recipes to Make"'
                    />
                    {
                        props.errors.map(error => {
                            return (
                                <p>{error}</p>
                            )
                        })
                    }
                    <div className="create-board-button-container">
                        <button onClick={handleBoardSubmit}>Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mSTP = (state) => {
    return {
        errors: state.errors.boards
    }
}

const mDTP = (dispatch) => {
    return {
        updateBoard: board => dispatch(createBoard(board)),
        deleteBoard: boardId => dispatch(deleteBoard(boardId))
    }
}

export default withRouter(connect(mSTP, mDTP)(BoardForm));