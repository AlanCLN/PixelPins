import React, { useState } from 'react';
import { useEffect } from 'react';

const SavePinButton = (props) => {

    const { pin, currentUser, savePin, unsavePin } = props

    const [saved, setSaved] = useState(() => {
        return currentUser.savedPins.includes(pin.id)
    })

    const handleSavePin = (e) => {
        e.preventDefault();
        setSaved(!saved)
        savePin(pin.id)
    }

    const handleUnSavePin = (e) => {
        e.preventDefault();
        setSaved(!saved)
        unsavePin(pin.id)
    }

    const saveButton = () => {
        return (
            <button
                className="save-pin-button"
                onClick={handleSavePin}
            >Save</button>
        )
    }

    const unsaveButton = () => {
        return (
            <button
                className="unsave-pin-button"
                onClick={handleUnSavePin}
            >Saved</button>
        )
    }

    return saved ? unsaveButton() : saveButton();
}

export default SavePinButton;