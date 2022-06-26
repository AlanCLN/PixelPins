import { connect } from "react-redux";
import UserShowSaved from "./user_show_saved";


const mSTP = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
    }
}

const mDTP = (dispatch, ownProps) => {
    return {

    }
}

export default connect(mSTP, mDTP)(UserShowSaved);