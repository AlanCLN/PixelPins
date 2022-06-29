import React, { useEffect } from 'react';
import PinIndexItem from '../pins/pin_index_item';
import { connect } from "react-redux";
import { fetchUserPins } from "../../actions/pin_actions";
import { fetchUser } from "../../actions/user_actions";
import { filterUserPins } from '../../reducers/selectors';
import Masonry from 'react-masonry-css';

const UserShowCreated = (props) => {

    const userParamsId = props.match.params.userId

    useEffect(() => {
        props.fetchUserPins();
    }, [userParamsId])

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
                columnClassName="user-show-my-masonry-grid_column"
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