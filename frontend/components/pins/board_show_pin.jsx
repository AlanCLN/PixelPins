import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddPinToBoardButton from '../buttons/add_pin_to_board_button';
import RemovePinFromBoardButton from '../buttons/remove_pin_from_board_button';
import { pinToBoard, unpinFromBoard } from '../../actions/pin_board_actions';

const BoardShowPin = (props) => {

    const { pin, currentUser, board, pinToBoard, unpinFromBoard } = props

    if (!pin) return null;
    if (!currentUser.savedPins) return null;

    return (
        <div className="pin-container">
            <Link to={`/pins/${pin.id}`} className="pin-show-link">
                <img src={pin.imageUrl} className="pin-image" loading="lazy"/>
                <div className="hidden-pin-layer">
                    <div className="hidden-save-pin">
                        <RemovePinFromBoardButton
                            pin={pin}
                            board={board}
                            unpinFromBoard={unpinFromBoard}
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
        unpinFromBoard: (boardId, pinId) => dispatch(unpinFromBoard(boardId, pinId)),
        pinToBoard: (boardId, pinId) => dispatch(pinToBoard(boardId, pinId))
    }
}

export default connect(mSTP, mDTP)(BoardShowPin);