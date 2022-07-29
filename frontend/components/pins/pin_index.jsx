import React, { useEffect, useState, useRef } from 'react';
import PinIndexItemContainer from './pin_index_item';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import { connect } from "react-redux";
import { fetchPins } from "../../actions/pin_actions";
import { openModal } from '../../actions/modal_actions';
import { fetchUser } from '../../actions/user_actions';
import ClipLoader from "react-spinners/ClipLoader";
import sleep from '../../util/sleep';
import { fetchUserBoards } from '../../actions/board_actions';
import { filterUserBoards } from '../../reducers/selectors';

const PinIndex = (props) => {

    const counter = useRef(0);
    const [loading, setLoading] = useState(true);

    const pinLoaded = async () => {
        counter.current += 1;
        if (counter.current >= pins.length) {
            await sleep(800)
            setLoading(false);
        }
    }

    const { pins, fetchPins, fetchUserBoards, boards, currentUser } = props;

    useEffect(() => {
        fetchPins();
        fetchUserBoards(currentUser.id);
    }, [])

    const handleOpenModal = (formType) => {
        return e => {
            e.preventDefault();
            props.openModal(formType);
        }
    }

    const breakpoints = {
        default: 7,
        1850: 6,
        1630: 5,
        1340: 4,
        1080: 3,
    }

    if (!pins) return null;

    return (
        <div className="pin-index-content">
            <div 
                className="loading-page"
                style={{display: loading ? "block" : "none"}}
            >
                <ClipLoader
                    className="clip-loader"
                    color={"#E60023"}
                    loading={loading}
                    size={30}
                />
            </div>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid-column"
                onLoad={pinLoaded}
            >
                {
                    pins.map(pin => {
                        return (
                            <PinIndexItemContainer
                                boards={boards}
                                pin={pin}
                                key={pin.id}
                            />
                        )
                    })
                }
            </Masonry>
            <div className="create-button-container">
                <div className="create-dropdown-btn">+
                    <div className="dropdown-content">
                        <Link to="/builder" className="create-button">Create Pin</Link>
                        <div onClick={handleOpenModal('board')}>Create Board</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mSTP = (state) => {
    return {
        boards: filterUserBoards(state, state.session.id),
        pins: Object.values(state.entities.pins),
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = (dispatch) => {
    return {
        fetchPins: () => dispatch(fetchPins()),
        fetchUserBoards: (userId) => dispatch(fetchUserBoards(userId)),
        openModal: (formType) => dispatch(openModal(formType))
    }
}

export default connect(mSTP, mDTP)(PinIndex);