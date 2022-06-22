import { RECEIVE_PINS, RECEIVE_PIN, REMOVE_PIN } from '../actions/pin_actions';

const pinsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_PINS:
            action.pins.forEach(pin => {
                nextState[pin.id] = {
                    id: pin.id,
                    title: pin.title,
                    description: pin.description,
                    uploaderId: pin.uploaderId
                };
            });
            return nextState;
        case RECEIVE_PIN:
            nextState[action.pin.id] = action.pin;
            return nextState;
        case REMOVE_PIN:
            delete nextState[action.pinId];
            return nextState;
        default:
            return state;
    }
}

export default pinsReducer;