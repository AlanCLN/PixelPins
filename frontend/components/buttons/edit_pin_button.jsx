import React from 'react';
import { Link } from 'react-router-dom';

const EditPinButton = (props) => {

    const { pinId } = props

    return (
        <div className="edit-pin-button">
            <Link to={`/pins/${pinId}/edit`}>
                <img src={window.editButton} />
            </Link>
        </div>
    )
}

export default EditPinButton;