import React from 'react';
import { Link } from 'react-router-dom';

const PinIndexItem = (props) => {

    const { pin } = props

    const handleSavePin = (e) => {
        e.preventDefault();
    }

    if (!pin) return null
    return (
        <div className="pin-container">
            <img src={pin.imageUrl} className="pin-image"/>
            <Link to={`/pins/${pin.id}`} className="pin-show-link" />
            <button 
                className="save-pin-button"
                onClick={handleSavePin}
            >Save</button>
        </div>
    )
}

export default PinIndexItem;