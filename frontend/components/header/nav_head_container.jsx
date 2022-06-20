import { connect } from "react-redux";
import NavHead from './nav_head';
import { openModal, closeModal } from "../../actions/modal_actions";

const mSTP = (state) => {
    return {

    }
}

const mDTP = (dispatch) => {
    return {
        openModal: (formType) => dispatch(openModal(formType))
    }
}

export default connect(mSTP, mDTP)(NavHead);