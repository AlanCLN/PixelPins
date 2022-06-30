import React from 'react';
import { connect } from 'react-redux';
import { filterUserSavedPins } from '../../reducers/selectors';
import { fetchUserSavedPins } from '../../actions/save_pin_actions';
import Masonry from 'react-masonry-css';
import PinIndexItemContainer from '../pins/pin_index_item';

const AddPinModal = (props) => {

    const { pins } = props

    if (!pins) return null

    const breakpoints = {
        default: 2,
    }

    return (
        <div className="add-pin-content">
            <div className="add-pin-container">
                <div className="saved-pins-title">
                    <span>Saved Pins</span>
                </div>
                <div className="saved-pins-content">
                <Masonry
                    breakpointCols={breakpoints}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid-column"
                >
                    {
                        pins.map((pin, idx) => {
                            return (
                                <PinIndexItemContainer
                                    pin={pin}
                                    key={idx}
                                />
                            )
                        })
                    }
                </Masonry>
                </div>
            </div>
        </div>
    )
}

const mSTP = (state, ownProps) => {
    const currentUserId = state.session.id
    return {
        pins: filterUserSavedPins(state, currentUserId)
    }
}

const mDTP = (dispatch) => {
    return {
        fetchUserSavedPins: (userId) => dispatch(fetchUserSavedPins(userId))
    }
}

export default connect(mSTP, mDTP)(AddPinModal);