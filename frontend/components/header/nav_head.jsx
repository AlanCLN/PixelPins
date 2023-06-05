import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfileIcon from '../user/profile_icon';
import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';

const NavHead = (props) => {
    
    const { currentUser, logout } = props;

    useEffect(() => {
        if (currentUser) {
            props.fetchCurrentUser(currentUser.id)
        }
    }, [])

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
                            <a href="https://alancln.dev/" target="_blank">Portfolio</a>
                        </div>
                        <div className="link-container">
                            <a href="https://github.com/alancln" target="_blank">Github</a>
                        </div>
                        <div className="link-container">
                            <a href="https://www.linkedin.com/in/alancln/" target="_blank">LinkedIn</a>
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
                <div className="auth-nav-links">
                    <div className="portfolio link-container icon-container">
                        <a href="https://alancln.dev/" target="_blank">
                            <img src={window.portfolioIcon} />
                        </a>
                    </div>
                    <div className="github link-container icon-container">
                        <a href="https://github.com/alancln" target="_blank">
                            <img src={window.githubIcon} />
                        </a>
                    </div>
                    <div className="linkedin link-container icon-container">
                        <a href="https://www.linkedin.com/in/alancln/" target="_blank">
                            <img src={window.linkedinIcon} />
                        </a>
                    </div>
                    <div className="nav-link-divider"></div>
                    <div className="avatar-logout-container">
                        <ProfileIcon
                            currentUser={currentUser}
                            image={false}
                        />
                        {/* <div className="avatar-container">
                            <Link to={`/users/${currentUser.id}`}>{
                                currentUser.username[0].toUpperCase()
                            }</Link>
                        </div> */}
                        <div className="logout-container">
                            <img src={window.logoutButton} onClick={props.logout}/>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }

    return currentUser ? AuthHead() : UnauthHead();

}

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        openModal: (formType) => dispatch(openModal(formType)),
        fetchCurrentUser: (userId) => dispatch(fetchUser(userId))
    }
}

export default connect(mSTP, mDTP)(NavHead);