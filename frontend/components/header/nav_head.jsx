import React from 'react';
import { Link } from 'react-router-dom';

const NavHead = (props) => {

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
                    <button className="session-modal header-login" onClick={openModal('login')}>
                        <div>Log in</div>
                    </button>
                    <button className="session-modal header-signup" onClick={openModal('signup')}>
                        <div>Sign up</div>
                    </button>
                    
                </div>
            </div>

        )
    }
    return UnauthHead();

}

export default NavHead;