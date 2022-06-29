import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchUserSavedPins } from '../../actions/save_pin_actions';
import { filterUserSavedPins } from '../../reducers/selectors';
import Masonry from 'react-masonry-css';
import PinIndexItem from '../pins/pin_index_item';

const UserShowSaved = (props) => {

    const userParamsId = props.match.params.userId
    
    useEffect(() => {
        props.fetchUserSavedPins(userParamsId)
    }, [userParamsId, props.userSavedPinsArray])

    const { user, pins } = props

    const breakpoints = {
        default: 7,
        1850: 6,
        1630: 5,
        1340: 4,
        1080: 3,
        740: 2,
        500: 1
    }

    if (!user || !pins) return null

    return (
        <div className="created-content">
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {
                    pins.map((pin, idx) => {
                        return (
                            <PinIndexItem
                                key={idx}
                                pin={pin}
                            />
                        )
                    }) 
                }
            </Masonry>
        </div>
    )
}

const mSTP = (state, ownProps) => {
    const userId = ownProps.match.params.userId
    return {
        user: state.entities.users[userId],
        pins: filterUserSavedPins(state, userId),
        userSavedPinsArray: state.entities.users[userId]?.savedPins
    }
}

const mDTP = (dispatch, ownProps) => {
    return {
        fetchUserSavedPins: (userId) => dispatch(fetchUserSavedPins(userId)),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}

export default connect(mSTP, mDTP)(UserShowSaved);