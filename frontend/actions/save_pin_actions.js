import * as SavePinAPIUtil from '../util/save_pin_api_util';
import { receiveUser } from './user_actions';

export const savePin = (pinId) => {
    return (dispatch) => {
        return SavePinAPIUtil.savePin(pinId)
        .then(user => dispatch(receiveUser(user)))
    }
}

export const unsavePin = (pinId) => {
    return (dispatch) => {
        return SavePinAPIUtil.unsavePin(pinId)
        .then(user => dispatch(receiveUser))
    }
}