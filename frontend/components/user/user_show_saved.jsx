import React from 'react';
import { connect } from "react-redux";

const UserShowSaved = (props) => {

    return (
        <h1>User Show Saved Page</h1>
    )
}

const mSTP = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
    }
}

const mDTP = (dispatch, ownProps) => {
    return {

    }
}

export default connect(mSTP, mDTP)(UserShowSaved);