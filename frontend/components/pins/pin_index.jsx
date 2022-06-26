import React, { useEffect, useState } from 'react';
import PinIndexItem from './pin_index_item';
import { Link } from 'react-router-dom';
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

    if (!pins) return null;
    return (
        <div className="pin-index-content">
            <div className="pin-index-page">
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
            </div>
            <div className="create-button-container">
                <Link to="/builder" className="create-button">+</Link>
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
}

export default PinIndex;