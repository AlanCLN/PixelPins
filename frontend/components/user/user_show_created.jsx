import React, { useEffect, useRef, useState } from 'react';
import PinIndexItem from '../pins/pin_index_item';
import { connect } from "react-redux";
import { fetchUserPins } from "../../actions/pin_actions";
import { fetchUser } from "../../actions/user_actions";
import { filterUserPins, filterUserBoards } from '../../reducers/selectors';
import { fetchUserBoards } from '../../actions/board_actions';
import Masonry from 'react-masonry-css';
import ClipLoader from "react-spinners/ClipLoader";
import sleep from '../../util/sleep';

const UserShowCreated = (props) => {

    const userParamsId = props.match.params.userId

    // const counter = useRef(0);
    // const [loading, setLoading] = useState(true);

    // const pinLoaded = async () => {
    //     counter.current += 1;
    //     if (counter.current >= pins.length) {
    //         setLoading(!loading);
    //     }
    // }

    useEffect(() => {
        props.fetchUserPins();
        props.fetchUserBoards();
    }, [userParamsId])

    const { user, pins, boards } = props

    const breakpoints = {
        default: 7,
        1850: 6,
        1630: 5,
        1340: 4,
        1080: 3,
        740: 2,
        500: 1
    }

    if (!user || !pins || !boards) return null

    return (
        <div className="created-content">
            {/* <div 
                className="user-show-loading-page"
                style={{display: loading ? "block" : "none"}}
            >
                <ClipLoader
                    className="clip-loader"
                    color={"#E60023"}
                    loading={loading}
                    size={30}
                />
            </div> */}
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="user-show-my-masonry-grid_column"
                // onLoad={pinLoaded}
            >
                {
                    pins.map((pin, idx) => {
                        return (
                            <PinIndexItem
                                boards={boards}
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
        pins: filterUserPins(state, userId),
        boards: filterUserBoards(state, userId),
    }
}

const mDTP = (dispatch, ownProps) => {
    const userId = ownProps.match.params.userId
    return {
        fetchUserPins: () => dispatch(fetchUserPins(userId)),
        fetchUserBoards: () => dispatch(fetchUserBoards(userId)),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}

export default connect(mSTP, mDTP)(UserShowCreated);