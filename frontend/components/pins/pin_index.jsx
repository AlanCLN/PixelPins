import React, { useEffect, useState } from 'react';
import PinIndexItem from './pin_index_item';

const PinIndex = (props) => {
    useEffect(() => {
        fetchPins();
    }, [])

    const { pins, fetchPins } = props

    if (!pins) return null;
    
    return (
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
    )
}

export default PinIndex;