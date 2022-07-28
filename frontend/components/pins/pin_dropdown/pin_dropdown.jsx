import React from 'react';
import PinSaveToProfile from './save_to_profile';
import PinSaveToBoard from './save_to_board';

const PinDropdown = props => {

    const { pin, boards, currentUser, savePin, unsavePin } = props

    if (!pin || !boards) return null;

    return (
        <div className="pin-save-dropdown-container" onClick={props.stopPropagation}>
            <div className="pin-save-dropdown-content">
                <div className="pin-save-dropdown-title">
                    Save
                </div>
                <div className="pin-save-dropdown-item-content">
                    <div className="pin-save-type-title">
                        Quick save and organize later
                    </div>
                    <PinSaveToProfile 
                        pin={pin}
                        currentUser={currentUser}
                        savePin={savePin}
                        unsavePin={unsavePin}
                    />
                    <div className="pin-save-type-title">
                        Save to board
                    </div>
                    {
                        boards.map((board, idx) => {
                            return (
                                <PinSaveToBoard
                                    board={board}
                                    pin={pin}
                                    key={idx}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PinDropdown;