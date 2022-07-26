import { connect } from "react-redux"
import FollowsModal from "./follows_modal"
import { filterUserFollowings } from '../../reducers/selectors';

const mSTP = (state, ownProps) => {
    const userId = ownProps.userId
    return {
        modalType: 'Followings',
        filteredUsers: filterUserFollowings(state, userId),
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = (dispatch) => {
    return {

    }
}

export default connect(mSTP, mDTP)(FollowsModal);