import React from 'react';
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";

const FollowModalController = ({modal, closeModal}) => {

    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'followers':
            component = <AddPinModalContainer />;
            break;
        case 'followings':
            
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

export default connect(mSTP, mDTP)(FollowModalController);