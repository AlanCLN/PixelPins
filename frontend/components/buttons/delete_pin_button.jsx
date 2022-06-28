import React from 'react';

const DeletePinButton = (props) => {

    const handleDeletePin = (e) => {
        e.preventDefault();
        props.deletePin()
        .then(props.finishDelete());
    }

    return (
        <div className="delete-pin-button">
            <img src={window.deleteButton} onClick={handleDeletePin}/>
        </div>
    )
}

export default DeletePinButton;