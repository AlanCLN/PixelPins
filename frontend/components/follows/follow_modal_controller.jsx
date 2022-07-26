import React from 'react';
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import FollowersContainer from './followers_container';
import FollowingsContainer from './followings_container';

const FollowModalController = ({modal, closeModal, userId}) => {

    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'followers':
            component = <FollowersContainer userId={userId}/>
            break;
        case 'followings':
            component = <FollowingsContainer userId={userId}/>
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