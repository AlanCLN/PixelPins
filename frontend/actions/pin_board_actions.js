import * as PinBoardAPIUtil from '../util/pin_board_api_util';
import { receiveBoard } from './board_actions';
import { receiveFilteredPins } from './pin_actions';

export const pinToBoard = (boardId, pinId) => {
    return (dispatch) => {
        return PinBoardAPIUtil.pinToBoard(boardId, pinId)
        .then(board => dispatch(receiveBoard(board)))
    }
}

export const unpinFromBoard = (boardId, pinId) => {
    return (dispatch) => {
        return PinBoardAPIUtil.unpinFromBoard(boardId, pinId)
        .then(board => dispatch(receiveBoard(board)))
    }
}

export const fetchPinsOnBoard = (boardId) => {
    return (dispatch) => {
        return PinBoardAPIUtil.fetchPinsOnBoard(boardId)
        .then(pins => dispatch(receiveFilteredPins(pins)))
    }
}