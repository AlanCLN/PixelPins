import React, { Component } from 'react';
import { Route, withRouter, Redirect } from "react-router-dom"
import { connect } from "react-redux";

const Auth = ({ component: Component, path, loggedIn, exact }) => {
    return (
        <Route
            path={path}
            exact={exact}
            render={props =>
                !loggedIn? <Component {...props} /> : <Redirect to="/" />
            }
        />
    )
}

const Protected = ({ component: Component, path, loggedIn, exact }) => {
    return (
        <Route
            path={path}
            exact={exact}
            render={props =>
                loggedIn? <Component {...props} /> : <Redirect to="/" />
            }
        />
    )
}

const mSTP = (state) => {
    return { 
        loggedIn: Boolean(state.session.id)
    }
}

export const AuthRoute = withRouter(
    connect(mSTP)(Auth)
);

export const ProtectedRoute = withRouter(
    connect(mSTP)(Protected)
);