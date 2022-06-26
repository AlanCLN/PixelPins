import React from 'react';

const SavePinButton = (props) => {

    const handleSavePin = (e) => {
        e.preventDefault();
        console.log('save pin')
    }

    return (
        <button
            className="save-pin-button"
            onClick={handleSavePin}
        >Save</button>
    )
}

export default SavePinButton;