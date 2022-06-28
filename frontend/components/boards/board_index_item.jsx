import React from 'react';

const BoardIndexItem = (props) => {
    
    const { board } = props;

    if (!board) return null;

    return (
        <h1>BoardIndexItem {board.id}</h1>
    )
}

export default BoardIndexItem;