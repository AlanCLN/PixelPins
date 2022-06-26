import React, { useEffect } from 'react';
import PinIndexItem from '../pins/pin_index_item';

const UserShowCreated = (props) => {

    const userParamsId = props.match.params.userId

    useEffect(() => {
        props.fetchUserPins();
    }, [userParamsId])

    const { user, pins } = props

    if (!user || !pins) return null
    return (
        <div className="saved-content">
            <div className="saved-container">
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
            </div>
        </div>
    )
}

export default UserShowCreated;