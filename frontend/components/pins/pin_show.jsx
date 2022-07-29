import React, { useEffect, useState } from 'react';
import EditPinButton from '../buttons/edit_pin_button';
import SavePinButton from '../buttons/save_pin_button';
import { connect, useDispatch } from "react-redux";
import { receivePin } from '../../actions/pin_actions';
import { fetchPin } from '../../util/pin_api_util';
import { savePin, unsavePin } from '../../actions/save_pin_actions';
import { fetchUser } from '../../util/user_api_util';
import { receiveUser } from '../../actions/user_actions';
import UserFollowIndexItem from '../follows/user_follow_index_item';
import { filterUserBoards } from '../../reducers/selectors';
import { fetchUserBoards } from '../../actions/board_actions';
import PinDropdown from './pin_dropdown/pin_dropdown';

const PinShow = (props) => {

    const pinParamsId = props.match.params.pinId
    const { pin, boards, currentUser, pinCreator, unsavePin, savePin } = props
    const dispatch = useDispatch();
    const [ showDropdown, setShowDropdown ] = useState(false);

    useEffect(() => {
        fetchData();
    }, [pinParamsId])

    const fetchData = async () => {
        let pin = await fetchPin(pinParamsId);
        dispatch(receivePin(pin));
        let user = await fetchUser(pin.uploaderId);
        dispatch(receiveUser(user));
        props.fetchUserBoards(currentUser.id)
    }

    const handleGoBack = (e) => {
        e.preventDefault();
        window.history.back();
    }

    const handleOpenDropdown = e => {
        e.preventDefault();
        e.stopPropagation();

        setShowDropdown(!showDropdown);
    }

    const handleStopPropagation = e => {
        e.preventDefault();
        e.stopPropagation();
    }

    document.addEventListener('click', () => {
        if (showDropdown) {
            setShowDropdown(false)
        }
    })

    if (!pin) return null;
    if (!currentUser.savedPins) return null;
    if (!pinCreator) return null;
    
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
                            {showDropdown &&
                            <div className="pin-show-dropdown-container">
                                <PinDropdown
                                    stopPropagation={handleStopPropagation}
                                    pin={pin}
                                    boards={boards}
                                    currentUser={currentUser}
                                    savePin={savePin}
                                    unsavePin={unsavePin}
                                />
                            </div>
                            }
                            <div className="pin-show-profile-dropdown-button-container" onClick={handleOpenDropdown}>
                                <span>Profile</span>
                                <div className="dropdown-icon-container">
                                    <img src={window.dropdownIconBlack} />
                                </div>
                            </div>
                            {currentUser.id === pin.uploaderId &&
                            <div className="show-edit-button-container">
                                <EditPinButton pinId={pin.id}/>
                            </div>
                            }
                            <SavePinButton 
                                currentUser={currentUser}
                                unsavePin={unsavePin}
                                savePin={savePin}
                                pin={pin}
                            />
                        </div>
                        <div className="pin-show-title">
                            {pin.title}
                        </div>
                        <div className="pin-show-description">
                            {pin.description}
                        </div>
                        <div className="pin-show-followee-info-container">
                            <UserFollowIndexItem
                                user={pinCreator}
                                currentUser={currentUser}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mSTP = (state, ownProps) => {
    const pinUploaderId = state.entities.pins[ownProps.match.params.pinId]?.uploaderId
    return {
        pin: state.entities.pins[ownProps.match.params.pinId],
        boards: filterUserBoards(state, state.session.id),
        currentUser: state.entities.users[state.session.id],
        pinCreator: state.entities.users[pinUploaderId]
    }
}

const mDTP = (dispatch) => {
    return {
        savePin: (pinId) => dispatch(savePin(pinId)),
        unsavePin: (pinId) => dispatch(unsavePin(pinId)),
        fetchUserBoards: (userId) => dispatch(fetchUserBoards(userId)),
    }
}

export default connect(mSTP, mDTP)(PinShow);