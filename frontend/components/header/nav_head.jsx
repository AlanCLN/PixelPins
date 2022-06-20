import React from 'react';
import { Link } from 'react-router-dom';

const NavHead = (props) => {
    
    const { currentUser, logout } = props;

    const openModal = (formType) => {
        return e => {
            e.preventDefault();
            props.openModal(formType);
        }
    }

    const UnauthHead = () => {
        return (
            <div className="nav-header">
                <div className="home-logo">
                    <Link to="/">
                        <div className="pinterest-logo">
                            <img src={window.pinterestIcon} />
                        </div>
                    </Link>
                    <Link className="home-logo-link" to="/">PixelPins</Link>
                </div>
                <div className="unauth-nav-links">
                    <div className="bio-links">
                        <div className="link-container">
                            <a href="https://github.com/alancln">Github</a>
                        </div>
                        <div className="link-container">
                            <a href="#">LinkedIn</a>
                        </div>
                        <div className="link-container">
                            <a href="#">Portfolio</a>
                        </div>
                    </div>
                    <button className="session-modal-button header-login" onClick={openModal('login')}>
                        <div>Log in</div>
                    </button>
                    <button className="session-modal-button header-signup" onClick={openModal('signup')}>
                        <div>Sign up</div>
                    </button>
                </div>
            </div>
        )
    }

    const AuthHead = () => {
        return (
            <div className="auth-head nav-header">
                <div className="home-logo">
                    <Link to="/">
                        <div className="pinterest-logo">
                            <img src={window.pinterestIcon} />
                        </div>
                    </Link>
                    <Link className="home-logo-link" to="/">PixelPins</Link>
                </div>
                <div className="search-bar-container">   
                    <input
                        disabled
                        type="text"
                        placeholder="Coming soon..."
                    />
                </div>
                <div className="unauth-nav-links">
                    <div className="bio-links">
                        <div className="link-container">
                            <a href="https://github.com/alancln">Github</a>
                        </div>
                        <div className="link-container">
                            <a href="#">LinkedIn</a>
                        </div>
                        <div className="link-container">
                            <a href="#">Portfolio</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return currentUser ? AuthHead() : UnauthHead();

}

export default NavHead;