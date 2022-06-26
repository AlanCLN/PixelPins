import * as PinAPIUtil from '../util/pin_api_util';

export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const REMOVE_PIN = 'REMOVE_PIN';
export const RECEIVE_PIN_ERRORS = 'RECEIVE_PIN_ERRORS';
export const RECEIVE_USER_PINS = 'RECEIVE_USER_PINS';

const receivePins = (pins) => {
    return {
        type: RECEIVE_PINS,
        pins
    }
}

const receivePin = (pin) => {
    return {
        type: RECEIVE_PIN,
        pin
    }
}

const removePin = (pinId) => {
    return {
        type: RECEIVE_PINS,
        pinId
    }
}

const receivePinErrors = (errors) => {
    return {
        type: RECEIVE_PIN_ERRORS,
        errors
    }
}

const receiveUserPins = (pins) => {
    return {
        type: RECEIVE_USER_PINS,
        pins
    }
}

export const fetchPins = () => {
    return (dispatch) => {
        return PinAPIUtil.fetchPins().then(pins =>
            dispatch(receivePins(pins))
        )
    }
}

export const fetchPin = (pinId) => {
    return (dispatch) => {
        return PinAPIUtil.fetchPin(pinId).then(pin =>
            dispatch(receivePin(pin))
        )
    }
}

export const createPin = (pin) => {
    return (dispatch) => {
        return PinAPIUtil.createPin(pin).then(pin =>
            dispatch(receivePin(pin)), err =>
            dispatch(receivePinErrors(err.responseJSON))
        )
    }
}

export const updatePin = (pin) => {
    return (dispatch) => {
        return PinAPIUtil.updatePin(pin).then(pin =>
            dispatch(receivePin(pin)), err =>
            dispatch(receivePinErrors(err.responseJSON))
        )
    }
}

export const deletePin = (pinId) => {
    return (dispatch) => {
        return PinAPIUtil.deletePin(pinId).then(() =>
            dispatch(removePin(pinId))
        )
    }
}

export const fetchUserPins = (pinId) => {
    return (dispatch) => {
        return PinAPIUtil.fetchUserPins(pinId)
        .then(pins => dispatch(receiveUserPins(pins)))
    }
}