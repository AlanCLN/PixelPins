import { RECEIVE_BOARDS, RECEIVE_BOARD, REMOVE_BOARD } from '../actions/board_actions';

const boardsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_BOARDS:
            action.boards.forEach(board => {
                nextState[board.id] = {
                    id: board.id,
                    name: board.name,
                    description: board.description,
                    userId: board.userId
                };
            });
            return nextState
        case RECEIVE_BOARD:
            nextState[action.board.id] = action.board
            return nextState;
        case REMOVE_BOARD:
            delete nextState[action.board.id];
            return nextState;
        default:
            return state;
    }
};

export default boardsReducer;