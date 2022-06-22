import * as BoardAPIUtil from '../util/board_api_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';

const receiveBoards = (boards) => {
    return {
        type: RECEIVE_BOARDS,
        boards
    }
}

const receiveBoard = (board) => {
    return {
        type: RECEIVE_BOARD,
        board
    }
}

const removeBoard = (boardId) => {
    return {
        type: REMOVE_BOARD,
        boardId
    }
}

const receiveBoardErrors = (errors) => {
    return {
        type: RECEIVE_BOARD_ERRORS,
        errors
    }
}

export const fetchBoards = () => {
    return (dispatch) => {
        return BoardAPIUtil.fetchBoards()
        .then(boards => dispatch(receiveBoards(boards)))
    }
}

export const fetchBoard = (boardId) => {
    return (dispatch) => {
        return BoardAPIUtil.fetchBoard(boardId)
        .then(board => dispatch(receiveBoard(board)))
    }
}

export const createBoard = (board) => {
    return (dispatch) => {
        return BoardAPIUtil.createBoard(board).then(board =>
            dispatch(receiveBoard(board)), err =>
            dispatch(receiveBoardErrors(err.responseJSON))
        )
    }
}

export const updateBoard = (board) => {
    return (dispatch) => {
        return BoardAPIUtil.updateBoard(board).then(board =>
            dispatch(receiveBoard(board)), err =>
            dispatch(receiveBoardErrors(err,responseJSON))    
        )
    }
}

export const deleteBoard = (boardId) => {
    return (dispatch) => {
        return BoardAPIUtil.deleteBoard(boardId)
        .then(() => dispatch(removeBoard(boardId)))
    }
}