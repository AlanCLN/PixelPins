import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { receiveFilteredPins } from '../../actions/pin_actions';
import { fetchPinsOnBoard } from '../../util/pin_board_api_util';

const BoardPreview = (props) => {
    
    const { board, openModal } = props;

    if (!board) return null;

    const dispatch = useDispatch();

    const [pins, setPins] = useState(() => {
        return []
    })

    useEffect(() => {
        fetchPins();
    }, [])

    const fetchPins = async () => {
        let pins = await fetchPinsOnBoard(board.id)
        setPins(Object.values(pins))
        dispatch(receiveFilteredPins(pins))
    }

    const setImage1 = () => {
        if (pins[0]) {
            return pins[0].imageUrl
        } else {
            return null;
        }
    }

    const setImage2 = () => {
        if (pins[1]) {
            return pins[1].imageUrl
        } else {
            return null;
        }
    }

    const setImage3 = () => {
        if (pins[2]) {
            return pins[2].imageUrl
        } else {
            return null;
        }
    }

    return (
        <Link className="board-show-link" to={`/boards/${board.id}`}>
            <div className="board-index-item-container">
                <div className="board-image-preview">
                    <img src={setImage1()} />
                </div>
                <div className="board-image-preview">
                    <img src={setImage2()} />
                </div>
                <div className="board-image-preview">
                    <img src={setImage3()} />
                </div>
            </div>
        </Link>
    )
}

export default BoardPreview;