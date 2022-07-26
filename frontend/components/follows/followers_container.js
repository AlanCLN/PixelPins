import { connect } from "react-redux";
import FollowsModal from "./follows_modal";
import { filterUserFollowers } from '../../reducers/selectors';

const mSTP = (state, ownProps) => {
    const userId = ownProps.userId
    return {
        modalType: 'Followers',
        filteredUsers: filterUserFollowers(state, userId),
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = (dispatch) => {
    return {

    }
}

export default connect(mSTP, mDTP)(FollowsModal);