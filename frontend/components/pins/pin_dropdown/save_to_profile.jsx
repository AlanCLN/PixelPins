import React from 'react';
import SavePinButton from '../../buttons/save_pin_button';

const PinSaveToProfile = props => {

    const { pin, currentUser, savePin, unsavePin } = props

    return (
        <div className="dropdown-index-item-content">
            <div>Profile</div>
            <SavePinButton 
                pin={pin}
                currentUser={currentUser}
                savePin={savePin}
                unsavePin={unsavePin}
            />
        </div>
    )
}

export default PinSaveToProfile;