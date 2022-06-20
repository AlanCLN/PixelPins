import { connect } from "react-redux";
import NavHead from './nav_head';
import { openModal, closeModal } from "../../actions/modal_actions";
import { logout } from '../../actions/session_actions';

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        openModal: (formType) => dispatch(openModal(formType))
    }
}

export default connect(mSTP, mDTP)(NavHead);