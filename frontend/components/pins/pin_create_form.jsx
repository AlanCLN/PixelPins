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
        return e => setState({ ...state, [field]: e.target.value })
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
        props.createPin(formData).then(() => {
            props.history.goBack();
        })
    }

    const preview = state.imageUrl ? <img src={state.imageUrl} /> : null;
    const hiddenClassName = state.imageUrl ? 'hidden' : null;

    return (
        <div className="pin-form-content">
            <div className="pin-form-container">
                <div className="form-body">
                    
                    <div className={`upload-container ${hiddenClassName}`}>
                        <div className={`upload-box ${hiddenClassName}`}>
                            {preview}
                            <div className={`upload-file-input ${hiddenClassName}`}>
                                <div className="upload-direction">
                                    <p>Drag and drop or click to</p>
                                    <p>upload</p>
                                </div>
                                    {!state.imageUrl && 
                                        <div className="upload-rec">
                                            <p>Reccomendation: Use high-quality .jpg files</p>
                                            <p>less than 20MB</p>
                                        </div>
                                    }
                                <input
                                    className="pin-image-button"
                                    type="file"
                                    onChange={handlePinFile}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="info-container">
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