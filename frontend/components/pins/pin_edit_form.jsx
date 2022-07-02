import React, { useState } from 'react';
import DeletePinButton from '../buttons/delete_pin_button';

const PinEditForm = (props) => {

    const [state, setState] = useState(() => {
        return props.pin
    })

    const update = (field) => {
        return e => setState({ ...state, [field]: e.target.value })
    }

    const handlePinSubmit = (e) => {
        e.preventDefault();
        props.updatePin(state)
        .then(() => {
            props.finishUpdate();
        })
    }

    const handleGoBack = (e) => {
        e.preventDefault();
        window.history.back();
    }
    const { currentUserId, pin, pinId, deletePin, finishDelete } = props;

    return (
        <div className="pin-form-content">
            <div
                className="pin-form-content-layer"
                onClick={handleGoBack}
            ></div>
            <div className="pin-form-container">
                <div className="form-body">
                    <div className="edit-form-image-container">
                        <img src={state.imageUrl} />
                    </div>
                    <div className="info-container">
                        <div className="form-type-container">
                            <h1>{props.formType}</h1>
                        </div>
                        <div className="pin-title-container">
                            <textarea
                                className="pin-title-field"
                                type="text"
                                value={state.title}
                                placeholder="Add your title"
                                onChange={update('title')}
                            />
                        </div>
                        <div className="pin-description-container">
                            <textarea
                                className="pin-description-field"
                                type="text"
                                value={state.description}
                                placeholder="Tell everyone what your Pin is about"
                                onChange={update('description')}
                            />
                        </div>
                        <div className="pin-errors-container">
                            {
                                props.errors.map((error, idx) => (
                                    <p className="error-message" key={idx}>{error}</p>
                                ))
                            }
                        </div>
                        <div className="create-edit-pin-button-container">
                            <button
                                className="form-edit-pin-button"
                                onClick={handlePinSubmit}
                                >{props.formButton}
                            </button>
                        </div>
                        {currentUserId === pin.uploaderId &&
                        <div className="edit-form-delete-button-container">
                            <DeletePinButton
                                pinId={pinId}
                                deletePin={deletePin}
                                finishDelete={finishDelete}
                            />
                        </div>
                        }
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default PinEditForm;