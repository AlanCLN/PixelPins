import React, { useState } from 'react';
import sleep from '../../util/sleep';

const SessionForm = (props) => {

    const [state, setState] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        props.processForm(state)
    }

    const closeModal = (e) => {
        e.preventDefault();
        props.closeModal();
    }

    async function handleDemoUser(e) {
        e.preventDefault();
        const demoUser = {username: 'demoUser', password: 'demouser'}
        setState(demoUser)
        await sleep(1200);
        props.login(demoUser).then(() => props.closeModal());
    }

    const update = (field) => {
        return e => setState({ ...state, [field]: e.target.value })
    }

    let text = props.formType === 'login'
    ? text = 'Log in'
    : text = 'Continue'

    return (
        <div className="session-form-container">
            <span className="modal-close" onClick={closeModal}>&times;</span>
            <div className="session-form-logo">
                <img src={window.pinterestIcon} alt="" />
            </div>
            <h1>Welcome to PixelPins</h1>
            <div className="error-message-container">
                {
                    props.errors.map((error, idx) => (
                        <p className="error-message" key={idx}>{error}</p>
                    ))
                }
            </div>
            <form className="form-box">
                <label htmlFor="username">
                    <div>Username</div>
                </label>
                <input
                    id="username"
                    type="text"
                    value={state.username}
                    placeholder="Username"
                    onChange={update('username')}
                />
                <label htmlFor="password">
                    <div>Password</div>
                </label>
                <input
                    id="password"
                    type="password"
                    value={state.password}
                    placeholder="Password"
                    onChange={update('password')}
                />
            </form>
            <button 
                className="form-submit-button"
                onClick={handleSubmit}>
                    {text}
            </button>
            <span>OR</span>
            <button
                className="demo-user-button"
                onClick={handleDemoUser}>
                Continue as Demo User
            </button>
            <div className="filler-text-container">
                <p>This clone is for educational purposes only.</p>
                <p>Please do not put any sensitive information.</p>
            </div>
            <div className="line-divide"></div>
            {props.otherForm}
        </div>
    )
}

export default SessionForm;