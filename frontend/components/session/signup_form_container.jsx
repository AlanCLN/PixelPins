import React from 'react';
import { connect } from "react-redux";
import SessionForm from "./session_form";
import { createNewUser, login } from "../../actions/session_actions";
import { openModal, closeModal } from '../../actions/modal_actions'; 

const mSTP = (state, ownProps) => {
    return {
        formType: 'signup',
        errors: state.errors.session
    }
}

const mDTP = (dispatch) => {
    return {
        processForm: (formUser) => dispatch(createNewUser(formUser)),
        login: (demoUser) => dispatch(login(demoUser)),
        closeModal: () => dispatch(closeModal()),
        otherForm: (
            <button 
                className="other-form-button"
                onClick={() => dispatch(openModal('login'))}>
                    Already a member? Log in
            </button>
        )
    }
}

export default connect(mSTP, mDTP)(SessionForm);