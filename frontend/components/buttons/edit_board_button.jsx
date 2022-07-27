import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const EditBoardButton = (props) => {

    const dispatch = useDispatch();

    return (
        <div className="edit-board-button">
            <img src={window.editButton} />
        </div>
    )
}

export default EditBoardButton;