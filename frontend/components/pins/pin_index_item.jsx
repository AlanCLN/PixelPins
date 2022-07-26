import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SavePinButton from '../buttons/save_pin_button';
import { savePin, unsavePin } from '../../actions/save_pin_actions';
import EditPinButton from '../buttons/edit_pin_button';

const PinIndexItem = (props) => {

    const { pin, currentUser, savePin, unsavePin } = props

    if (!pin) return null;
    if (!currentUser.savedPins) return null;

    return (
        <div className="pin-container">
            <Link as="div" to={`/pins/${pin.id}`} className="pin-show-link">
                <img src={pin.imageUrl} className="pin-image" loading="lazy"/>
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
            {currentUser.id === pin.uploaderId &&
            <div className="pin-index-edit-button-container">
                <div className="pin-index-edit-button-content">
                    <EditPinButton pinId={pin.id}/>
                </div>
            </div>
            }
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