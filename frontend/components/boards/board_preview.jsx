import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { receiveFilteredPins } from '../../actions/pin_actions';
import { fetchPinsOnBoard } from '../../util/pin_board_api_util';
import EditBoardButton from '../buttons/edit_board_button';
import BoardEditModalContainer from './user_show_board_edit_modal';

const BoardPreview = (props) => {
    
    const { board, currentUser, user } = props;

    if (!board) return null;

    const dispatch = useDispatch();

    const [pins, setPins] = useState(() => {
        return []
    })

    const [showEdit, setShowEdit ] = useState(false);

    useEffect(() => {
        fetchPins();
    }, [])

    const fetchPins = async () => {
        let pins = await fetchPinsOnBoard(board.id)
        setPins(Object.values(pins))
        dispatch(receiveFilteredPins(pins))
    }

    const handleShowEditModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setShowEdit(true);
    }

    const handleCloseEditModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setShowEdit(false);
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
        <>  
            {showEdit &&
            <div className="board-modal-background" onClick={handleCloseEditModal}>
                <div className="board-modal-child" onClick={e => e.stopPropagation()}>
                    <BoardEditModalContainer board={board}/> 
                </div>
            </div>
            }
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
                    <div className="hidden-board-preview-layer">
                        {currentUser.id === user.id &&
                        <div className="board-preview-edit-button-container" onClick={handleShowEditModal}>
                            <div className="board-preview-edit-button-content">
                                <EditBoardButton />
                            </div>
                        </div>
                        }
                    </div>
                </div>
                <div className="board-preview-info-container">
                    <p className="board-preview-name">{board.name}</p>
                    <p className="board-preview-num-pins">{pins.length} Pins</p>
                </div>
            </Link>
        </>
    )
}

export default BoardPreview;