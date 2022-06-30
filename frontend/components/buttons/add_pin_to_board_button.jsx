import React, { useState } from 'react';

const AddPinToBoardButton = (props) => {

    const { pin, board, pinToBoard, unpinFromBoard } = props

    const [add, setAdd] = useState(() => {
        return board.pins.includes(pin.id)
    })
    console.log('pin:', pinToBoard)
    console.log('board', unpinFromBoard)

    const handleAddPin = (e) => {
        e.preventDefault();
        setAdd(!add)
        pinToBoard(board.id, pin.id)
    }

    const handleUnAddPin = (e) => {
        e.preventDefault();
        setAdd(!add)
        unpinFromBoard(board.id, pin.id)
    }

    const addButton = () => {
        return (
            <button
                className="add-pin-button"
                onClick={handleAddPin}
            >Add</button>
        )
    }

    const unAddButton = () => {
        return (
            <button
                className="unadd-pin-button"
                onClick={handleUnAddPin}
            >Remove</button>
        )
    }

    return add ? unAddButton() : addButton();
}

export default AddPinToBoardButton;