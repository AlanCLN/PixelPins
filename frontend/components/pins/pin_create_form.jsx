import React, { useState } from 'react';

const PinCreateForm = (props) => {

    const [state, setState] = useState(() => {
        return {
            title: '',
            description: '',
            imageFile: null,
            imageUrl: null
        }
    })

    const update = (field) => {
        return e => setState({...state}, { [field]: e.currentTarget.value } )
    }

    const handlePinFile = (e) => {
        const fileReader = new FileReader();
        const file = e.currentTarget.files[0];

        fileReader.onloadend = () => {
            setState(prevState => {
                return { ...prevState, imageFile: file}
            })
            setState(prevState => {
                return { ...prevState, imageUrl: fileReader.result }
            })
        }
        
        if (file) {
            fileReader.readAsDataURL(file);
        } else {
            setState({...state}, { imageFile: null })
            setState({...state}, { imageUrl: null })
        }
    }

    const handlePinSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('pin[title]', state.title);
        formData.append('pin[description]', state.description);
        if (state.imageFile) {
            formData.append('pin[image]', state.imageFile);
        }
        props.createPin(formData);
    }

    const preview = state.imageUrl ? <img src={state.imageUrl} /> : null;

    return (
        <div className="pin-form-content">
            <div className="pin-form-container">
                <div className="form-body">
                    <div className="upload-container">
                        <div className="upload-box">
                            {preview}
                        </div>
                        <div className="upload-file-input">
                            <input
                                className="pin-image-button"
                                type="file"
                                onChange={handlePinFile}
                            />
                        </div>
                    </div>
                    <div className="info-container">
                        <div className="pin-title-container">
                            <input
                                className="pin-title-field"
                                type="text"
                                value={state.title}
                                placeholder="Add your title"
                                onChange={update('title')}
                            />
                        </div>
                        <div className="pin-description-container">
                            <input 
                                className="pin-description-field"
                                type="text"
                                value={state.description}
                                placeholder="Tell everyone what your Pin is about"
                                onChange={update('description')}
                            />
                        </div>
                        <div className="save-pin-button-container">
                            <button
                                className="save-pin-button"
                                onClick={handlePinSubmit}
                                >Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PinCreateForm;