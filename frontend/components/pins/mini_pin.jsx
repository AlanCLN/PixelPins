import React from 'react';
import { connect } from 'react-redux';
import { pinToBoard, unpinFromBoard } from '../../actions/pin_board_actions';
import AddPinToBoardButton from '../buttons/add_pin_to_board_button';

const MiniPin = (props) => {

    const { pin, currentUser, board, unpinFromBoard, pinToBoard } = props

    if (!pin) return null;
    if (board.pins.includes(pin.id)) return null;

    return (
        <div className="mini-pin-container">
            <div className="mini-pin-content">
                <img src={pin.imageUrl}
                className="pin-image"
                loading="lazy"
                />
                <div className="mini-hidden-pin-layer">
                    <div className="mini-hidden-add-pin">
                        <AddPinToBoardButton 
                            pin={pin}
                            board={board}
                            pinToBoard={pinToBoard}
                            unpinFromBoard={unpinFromBoard}
                        />
                    </div>
                </div>
            </div>
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

export default connect(mSTP, mDTP)(MiniPin);