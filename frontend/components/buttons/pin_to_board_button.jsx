import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { pinToBoard, unpinFromBoard } from '../../util/pin_board_api_util';
import { receiveBoard } from '../../actions/board_actions';

const PinToBoardButton = props => {
    const { pin, board } = props;
    const dispatch = useDispatch();

    const [saved, setSaved] = useState(() => {
        return board.pins.includes(pin.id);
    })

    const handlePinToBoard = async (e) => {
        e.preventDefault();
        let boardObject = await pinToBoard(board.id, pin.id);
        dispatch(receiveBoard(boardObject));
        setSaved(!saved)
    }

    const handleunPinFromBoard = async (e) => {
        e.preventDefault();
        let boardObject = await unpinFromBoard(board.id, pin.id);
        dispatch(receiveBoard(boardObject))
        setSaved(!saved)
    }

    const addButton = () => {
        return (
            <button
                className="add-pin-button"
                onClick={handlePinToBoard}
            >Save</button>
        )
    }

    const unAddButton = () => {
        return (
            <button
                className="unadd-pin-button"
                onClick={handleunPinFromBoard}
            >Saved</button>
        )
    }

    return saved ? unAddButton() : addButton();
}

export default PinToBoardButton;