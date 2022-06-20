import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
        // .then(() => this.props.history.push('./'));
    }

    closeModal(e) {
        e.preventDefault();
        this.props.closeModal();
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    render() {

        let text = this.props.formType === 'login'
        ? text = 'Log in'
        : text = 'Continue'

        return (
            <div className="session-form-container">
                <span className="modal-close" onClick={this.closeModal}>&times;</span>
                <h1>Welcome to PixelPins</h1>
                <div className="error-message-container">
                    {
                        this.props.errors.map((error, idx) => (
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
                        value={this.state.username}
                        placeholder="Username"
                        onChange={this.update('username')}
                    />
                    <label htmlFor="password">
                        <div>Password</div>
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.update('password')}
                    />
                </form>
                <button 
                    className="form-submit-button"
                    onClick={this.handleSubmit}>
                        {text}
                </button>
                <span>OR</span>
                <button className="demo-user-button">
                    Continue as Demo User
                </button>
                <div className="filler-text-container">
                    <p>This clone is for educational purposes only.</p>
                    <p>Please do not put any sensitive information.</p>
                </div>
                <div className="line-divide"></div>
                {this.props.otherForm}
            </div>
        )
    }
}

export default SessionForm;