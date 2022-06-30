import React from 'react';
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import AddPinModalContainer from '../boards/baord_show_add_pin_modal';

const AddPinModalController = ({modal, closeModal}) => {

    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'add-pin':
            component = <AddPinModalContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )
}

const mSTP = (state) => {
    return {
        modal: state.ui.modal
    }
}

const mDTP = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(AddPinModalController);