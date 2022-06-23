import { connect } from "react-redux";
import { fetchPins } from "../../actions/pin_actions";
import PinIndex from './pin_index';

const mSTP = (state) => {
    return {
        pins: Object.values(state.entities.pins)
    }
}

const mDTP = (dispatch) => {
    return {
        fetchPins: () => dispatch(fetchPins())
    }
}

export default connect(mSTP, mDTP)(PinIndex);