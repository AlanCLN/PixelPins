import { connect } from "react-redux";
import { fetchPin } from '../../actions/pin_actions';
import PinShow from './pin_show';

const mSTP = (state, ownProps) => {
    const pin = state.entities.pins[ownProps.match.params.pinId]
    return {
        pin: pin,
        currentUserId: state.session.id,
        user: state.entities.users[pin.uploader_id]
    }
}

const mDTP = (dispatch) => {
    return {
        fetchPin: (pinId) => dispatch(fetchPin(pinId))
    }
}

export default connect(mSTP, mDTP)(PinShow);