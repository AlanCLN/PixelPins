import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        debugger
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
            <header>
                <h3>{text}</h3>
                <p>{this.props.errors}</p>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            />
                    </label>
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            />
                    </label>
                    <button>{text}</button>
                    {this.props.otherForm}
                </form>
            </header>
        )
    }
}

export default SessionForm;