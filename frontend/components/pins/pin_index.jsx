import React, { useEffect, useState } from 'react';
import PinIndexItem from './pin_index_item';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import { connect } from "react-redux";
import { fetchPins } from "../../actions/pin_actions";
import { openModal } from '../../actions/modal_actions';

// import ClipLoader from "react-spinners/ClipLoader";
// import sleep from '../../util/sleep';

const PinIndex = (props) => {

    // const [loading, setLoading] = useState(true);
    const { pins, fetchPins } = props;

    const loadingFunction = async () => {
        // setLoading(true);
        await fetchPins();
    }

    useEffect(() => {
        loadingFunction();
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
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {
                    pins.map(pin => {
                        return (
                            <PinIndexItem 
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
            {/* <div className="loading-page" onLoad={hideLoader}>
                <ClipLoader
                    color={"#E60023"}
                    loading={loading}
                    size={30}
                />
            </div> */}
        </div>
    )
};

const mSTP = (state) => {
    return {
        pins: Object.values(state.entities.pins)
    }
}

const mDTP = (dispatch) => {
    return {
        fetchPins: () => dispatch(fetchPins()),
        openModal: (formType) => dispatch(openModal(formType))
    }
}

export default connect(mSTP, mDTP)(PinIndex);