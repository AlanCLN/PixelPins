import React from 'react';
import { connect } from 'react-redux';

const CreateBoardModal = (props) => {

    const [name, setName] = useState("");

    return (
        <div className="board-modal-container">
            <div className="board-modal-form-container">
                <form className="board-modal-form">
                    <label htmlFor="board-name"/>Name
                    <input id="board-name" type="text" />
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

    }
}

export default connect(mSTP, mDTP)(CreateBoardModal);