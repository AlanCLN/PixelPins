import React from 'react';
import { Link } from 'react-router-dom';

const BoardIndexItem = (props) => {
    
    const { board, openModal } = props;

    if (!board) return null;

    return (
        <Link className="board-show-link" to={`/boards/${board.id}`}>
            <div className="board-index-item-container">
                <div className="board-image-preview">
                    <img src="https://pixel-pins-seeds.s3.amazonaws.com/splashdestination14.jpg" />
                </div>
                <div className="board-image-preview">
                    <img src="https://pixel-pins-seeds.s3.amazonaws.com/splashdestination5.jpg" />
                </div>
                <div className="board-image-preview">
                    <img src="https://pixel-pins-seeds.s3.amazonaws.com/splashdestination3.jpg" />
                </div>
            </div>
        </Link>
    )
}

export default BoardIndexItem;

