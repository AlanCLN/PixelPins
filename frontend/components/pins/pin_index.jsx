import React, { useEffect, useState } from 'react';
import PinIndexItem from './pin_index_item';
import { Link } from 'react-router-dom';

const PinIndex = (props) => {
    useEffect(() => {
        fetchPins();
    }, [])

    const { pins, fetchPins } = props

    if (!pins) return null;
    
    return (
        <>
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
        </>
    )
}

export default PinIndex;