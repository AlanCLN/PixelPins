import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import BoardEditModal from './board_edit_modal';

const mSTP = (state) => {
    return {
        pageType: 'user-show',
        errors: state.errors.boards,
        currentUserId: state.session.id
    }
}

export default withRouter(connect(mSTP)(BoardEditModal));