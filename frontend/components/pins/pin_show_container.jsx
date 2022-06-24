import { connect } from "react-redux";
import { fetchPin } from '../../actions/pin_actions';
import PinShow from './pin_show';
import * as PinAPIUtil from "../../util/pin_api_util";

const mSTP = (state, ownProps) => {
    return {
        pin: state.entities.pins[ownProps.match.params.pinId],
        currentUserId: state.session.id,
    }
}

const mDTP = (dispatch) => {
    return {
        fetchPin: (pinId) => dispatch(fetchPin(pinId)),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}

export default connect(mSTP, mDTP)(PinShow);