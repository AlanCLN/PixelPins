import React, { useEffect } from 'react';
import DeletePinButton from '../buttons/delete_pin_button';
import EditPinButton from '../buttons/edit_pin_button';
import SavePinButton from '../buttons/save_pin_button';
import { connect } from "react-redux";
import { fetchPin } from '../../actions/pin_actions';

const PinShow = (props) => {

    useEffect(() => {
        props.fetchPin(props.match.params.pinId)
        // fetchPinShowInfo();
    }, [])

    // async function fetchPinShowInfo() {
    //     await props.fetchPin(props.match.params.pinId);
    //     await props.fetchUser(props.pin.uploaderId)
    // }
    const handleGoBack = (e) => {
        e.preventDefault();
        window.history.back();
    }

    const { pin } = props
    if (!pin) return null
    return (
        <div className="pin-show-content">
            <div 
                className="pin-show-content-layer"
                onClick={handleGoBack}
            ></div>
            <div className="pin-show-container">
                <div className="pin-show-body">
                    <div className="pin-show-image-container">
                        <img src={pin.imageUrl} />
                    </div>
                    <div className="pin-show-info-container">
                        <div className="pin-show-buttons-container">
                            <SavePinButton />
                        </div>
                        <div className="pin-show-title">
                            {pin.title}
                        </div>
                        <div className="pin-show-description">
                            {pin.description}
                        </div>
                        {props.currentUserId === pin.uploaderId &&
                            <div className="edit-delete-button-container">
                                <div className="show-edit-button-container">
                                    <EditPinButton pinId={pin.id}/>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

const mSTP = (state, ownProps) => {
    return {
        pin: state.entities.pins[ownProps.match.params.pinId],
        currentUserId: state.session.id
    }
}

const mDTP = (dispatch) => {
    return {
        fetchPin: (pinId) => dispatch(fetchPin(pinId)),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}

export default connect(mSTP, mDTP)(PinShow);