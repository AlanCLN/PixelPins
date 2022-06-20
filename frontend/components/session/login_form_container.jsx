import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = (state) => {
    return {
        formType: 'login',
        errors: state.errors.session
    }
}

const mDTP = (dispatch) => {
    return {
        processForm: (formUser) => dispatch(login(formUser)),
        login: (demoUser) => dispatch(login(demoUser)),
        closeModal: () => dispatch(closeModal()),
        otherForm: (
            <button
                className="other-form-button"
                onClick={() => dispatch(openModal('signup'))}>
                    Not on PixelPin yet? Sign up
            </button>
        )

    }
}

export default connect(mSTP, mDTP)(SessionForm);