import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBoard } from '../../actions/board_actions';

const BoardShow = (props) => {

    const boardParamsId = props.match.params.boardId

    useEffect(() => {
        props.fetchBoard(boardParamsId);
    }, [boardParamsId])

    const { board } = props

    if (!board) return null
    return (
        <h1>BoardShow ID:{board.id}</h1>
    )
}

const mSTP = (state , ownProps) => {
    return {
        board: state.entities.boards[ownProps.match.params.boardId],
        currentUserId: state.session.id
    }
}

const mDTP = (dispatch, ownProps) => {
    return {
        fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}

export default connect(mSTP, mDTP)(BoardShow);