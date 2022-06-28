import { connect } from "react-redux";
import { createBoard } from '../../actions/board_actions';
import CreateBoardModal from './create_board_modal';

const mSTP = (state) => {
    return {

    }
}

const mDTP = (dispatch) => {
    return {
        createBoard: board => dispatch(createBoard(board))
    }
}

export default connect(mSTP, mDTP)(CreateBoardModal);