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

// class SessionForms extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             password: ''
//         }
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.closeModal = this.closeModal.bind(this);
//         this.handleDemoUser = this.handleDemoUser.bind(this);
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         this.props.processForm(this.state);
//     }

//     closeModal(e) {
//         e.preventDefault();
//         this.props.closeModal();
//     }

//     async handleDemoUser(e) {
//         e.preventDefault();
//         this.setState({username: 'demoUser', password: 'demouser'})
//         await sleep(1200)
//         this.props.login(this.state).then(() => this.props.closeModal());
//     }

//     update(field) {
//         return e => this.setState({ [field]: e.target.value })
//     }

//     render() {

//         let text = this.props.formType === 'login'
//         ? text = 'Log in'
//         : text = 'Continue'

//         return (
//             <div className="session-form-container">
//                 <span className="modal-close" onClick={this.closeModal}>&times;</span>
//                 <h1>Welcome to PixelPins</h1>
//                 <div className="error-message-container">
//                     {
//                         this.props.errors.map((error, idx) => (
//                             <p className="error-message" key={idx}>{error}</p>
//                         ))
//                     }
//                 </div>
//                 <form className="form-box">
//                     <label htmlFor="username">
//                         <div>Username</div>
//                     </label>
//                     <input
//                         id="username"
//                         type="text"
//                         value={this.state.username}
//                         placeholder="Username"
//                         onChange={this.update('username')}
//                     />
//                     <label htmlFor="password">
//                         <div>Password</div>
//                     </label>
//                     <input
//                         id="password"
//                         type="password"
//                         value={this.state.password}
//                         placeholder="Password"
//                         onChange={this.update('password')}
//                     />
//                 </form>
//                 <button 
//                     className="form-submit-button"
//                     onClick={this.handleSubmit}>
//                         {text}
//                 </button>
//                 <span>OR</span>
//                 <button
//                     className="demo-user-button"
//                     onClick={this.handleDemoUser}>
//                     Continue as Demo User
//                 </button>
//                 <div className="filler-text-container">
//                     <p>This clone is for educational purposes only.</p>
//                     <p>Please do not put any sensitive information.</p>
//                 </div>
//                 <div className="line-divide"></div>
//                 {this.props.otherForm}
//             </div>
//         )
//     }
// }