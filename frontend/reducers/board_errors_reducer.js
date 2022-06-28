import { RECEIVE_BOARD_ERRORS } from "../actions/board_actions";
import { CLOSE_MODAL } from "../actions/modal_actions";

const _nullErrors = [];

const boardErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_BOARD_ERRORS:
            return action.errors;
        case CLOSE_MODAL:
            return _nullErrors;
        default:
            return state;
    }
}

export default boardErrorsReducer;