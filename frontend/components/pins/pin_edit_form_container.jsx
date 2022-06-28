import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { deletePin, fetchPin, updatePin } from '../../actions/pin_actions';
import PinEditForm from './pin_edit_form';

const fetchEditForm = (props) => {

    useEffect(() => {
        props.fetchPin(props.match.params.pinId)
    }, [])

    const { 
        pin,
        formType,
        formButton,
        updatePin,
        errors,
        finishUpdate,
        deletePin,
        finishDelete,
        currentUserId
    } = props

    if (!pin) return null;

    return (
        <PinEditForm 
            pin={pin}
            formType={formType}
            formButton={formButton}
            updatePin={updatePin}
            errors={errors}
            finishUpdate={finishUpdate}
            deletePin={deletePin}
            finishDelete={finishDelete}
            currentUserId={currentUserId}
        />
    )
}

const mSTP = (state, ownProps) => {
    return {
        formType: 'Update Pin',
        formButton: 'Update',
        errors: state.errors.pins,
        pin: state.entities.pins[ownProps.match.params.pinId],
        currentUserId: state.session.id
    }
}

const mDTP = (dispatch, ownProps) => {
    const pinId = ownProps.match.params.pinId;
    return {
        updatePin: pin => dispatch(updatePin(pin)),
        fetchPin: pinId => dispatch(fetchPin(pinId)),
        finishUpdate: () => ownProps.history.push(`/pins/${pinId}`),
        deletePin: () => dispatch(deletePin(pinId)),
        finishDelete: () => ownProps.history.push("/")
    }
}

export default connect(mSTP, mDTP)(fetchEditForm);