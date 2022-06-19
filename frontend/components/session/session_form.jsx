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
        ? text = 'Login'
        : text = 'Sign Up'

        return (
            <div className="session-form-container">
                <h1>Welcome to PixelPins</h1>
                <p>{this.props.errors}</p>
                <form onSubmit={this.handleSubmit} className="form-box">
                    <label htmlFor="username">Username
                    <input
                        id="username"
                        type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                    />
                    </label>
                    <label>Password
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            />
                    </label>
                    <button>{text}</button>
                    {this.props.otherForm}
                </form>
            </div>
        )
    }
}

export default SessionForm;