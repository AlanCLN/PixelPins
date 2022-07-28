import React from 'react';
import PinToBoardButton from '../../buttons/pin_to_board_button';

const PinSaveToBoard = props => {

    const { board, pin } = props

    if (!board || !pin) return null

    return (
        <div className="dropdown-index-item-content">
            <div>{board.name}</div>
            <PinToBoardButton 
                board={board}
                pin={pin}
            />
        </div>
    )
}

export default PinSaveToBoard;