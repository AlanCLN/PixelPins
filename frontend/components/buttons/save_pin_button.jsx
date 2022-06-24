import React from 'react';

const SavePinButton = (props) => {

    const handleSavePin = (e) => {
        e.preventDefault();
    }

    return (
        <button
            className="save-pin-button"
            onClick={handleSavePin}
        >Save</button>
    )
}

export default SavePinButton;