import { connect } from "react-redux";
import PinForm from "./pin_form";
import { createPin } from "../../actions/pin_actions";

const mSTP = (state) => {
    return {
        formType: 'Create Pin',
        formButton: 'Create',
        errors: state.errors.pins,
        pin: {
            title: '',
            description: '',
            imageFile: null,
            imageUrl: null
        }
    }
}

const mDTP = (dispatch) => {
    return {
        processForm: pin => dispatch(createPin(pin)),
    }
}

export default connect(mSTP, mDTP)(PinForm);