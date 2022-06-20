import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
        // .then(() => this.props.history.push('./'));
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
                <h1>Welcome to PixelPins</h1>
                <p>{this.props.errors}</p>
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
                {this.props.otherForm}
            </div>
        )
    }
}

export default SessionForm;