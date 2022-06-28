import React, { useState } from 'react';
import { connect } from "react-redux";
import { createBoard } from '../../actions/board_actions';

const BoardForm = (props) => {

    const [state, setState] = useState({
        name: ''
    })

    const handleNameChange = (e) => {
        setState({...state, name: e.target.value})
    }

    const handleBoardSubmit = (e) => {
        e.preventDefault();
        debugger
        props.createBoard(state);
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

    }
}

const mDTP = (dispatch) => {
    return {
        createBoard: board => dispatch(createBoard(board))
    }
}

export default connect(mSTP, mDTP)(BoardForm);

