import { connect } from "react-redux";
import { fetchUserPins } from "../../actions/pin_actions";
import { fetchUser } from "../../actions/user_actions";
import { filterUserPins } from '../../reducers/selectors';
import UserShowCreated from "./user_show_created";

const mSTP = (state, ownProps) => {
    const userId = ownProps.match.params.userId
    return {
        user: state.entities.users[userId],
        pins: filterUserPins(state, userId)
    }
}

const mDTP = (dispatch, ownProps) => {
    const userId = ownProps.match.params.userId
    return {
        fetchUserPins: () => dispatch(fetchUserPins(userId)),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}

export default connect(mSTP, mDTP)(UserShowCreated);