import React from 'react';

const AddPinToBoardButton = (props) => {

    const { pin, board, pinToBoard } = props

    const handleAddPin = (e) => {
        e.preventDefault();
        pinToBoard(board.id, pin.id)
    }

    const addButton = () => {
        return (
            <button
                className="add-pin-button"
                onClick={handleAddPin}
            >Save</button>
        )
    }

    return addButton();
}

export default AddPinToBoardButton;