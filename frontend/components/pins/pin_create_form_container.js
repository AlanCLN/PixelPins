import { connect } from "react-redux";
import PinCreateForm from "./pin_create_form";
import { createPin } from '../../actions/pin_actions';

const mSTP = (state) => {
    return {
        errors: state.errors.pins,
    }
}

const mDTP = (dispatch) => {
    return {
        createPin: pin => dispatch(createPin(pin)),
    }
}

export default connect(mSTP, mDTP)(PinCreateForm);