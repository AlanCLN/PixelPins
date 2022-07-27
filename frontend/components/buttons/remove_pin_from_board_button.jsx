import React, { useState } from 'react';

const RemovePinFromBoardButton = (props) => {

    const { pin, board, unpinFromBoard } = props

    const handleUnAddPin = (e) => {
        e.preventDefault();
        unpinFromBoard(board.id, pin.id)
    }

    const unAddButton = () => {
        return (
            <button
                className="unadd-pin-button"
                onClick={handleUnAddPin}
            >Saved</button>
        )
    }

    return unAddButton();
}

export default RemovePinFromBoardButton;