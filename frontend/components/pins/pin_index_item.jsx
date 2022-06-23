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
            <Link to={`/pins/${pin.id}`} className="pin-show-link">
                <img src={pin.imageUrl} className="pin-image"/>
                <div className="hidden-pin-layer">
                    <button
                        className="save-pin-button"
                        onClick={handleSavePin}
                    >Save</button>
                </div>
            </Link>
        </div>
    )
}

export default PinIndexItem;