import React from 'react';

const PinSaveToBoard = props => {

    const { board } = props

    return (
        <div className="dropdown-index-item-content">
            <div>{board.name}</div>
        </div>
    )
}

export default PinSaveToBoard;