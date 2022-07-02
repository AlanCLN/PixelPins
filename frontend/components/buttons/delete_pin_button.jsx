import React from 'react';

const DeletePinButton = (props) => {

    const { pinId, deletePin, finishDelete } = props;

    const handleDeletePin = (e) => {
        e.preventDefault();
        deletePin(pinId)
        .then(finishDelete());
    }

    return (
        <div className="delete-pin-button">
            <img src={window.deleteButton} onClick={handleDeletePin}/>
        </div>
    )
}

export default DeletePinButton;