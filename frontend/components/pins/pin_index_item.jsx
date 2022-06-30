import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import SavePinButton from '../buttons/save_pin_button';
import { savePin, unsavePin } from '../../actions/save_pin_actions';

const PinIndexItem = (props) => {

    const { pin, currentUser, savePin, unsavePin } = props

    if (!pin) return null;
    if (!currentUser.savedPins) return null;

    return (
        <div className="pin-container">
            <Link to={`/pins/${pin.id}`} className="pin-show-link">
                <img src={pin.imageUrl}
                    className="pin-image"
                    loading="lazy"
                    />
                <div className="hidden-pin-layer">
                    <div className="hidden-save-pin">
                        <SavePinButton
                            currentUser={currentUser}
                            unsavePin={unsavePin}
                            savePin={savePin}
                            pin={pin}
                        />
                    </div>
                </div>
            </Link>
        </div>
    )
}

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = (dispatch) => {
    return {
        savePin: (pinId) => dispatch(savePin(pinId)),
        unsavePin: (pinId) => dispatch(unsavePin(pinId))
    }
}

export default connect(mSTP, mDTP)(PinIndexItem);