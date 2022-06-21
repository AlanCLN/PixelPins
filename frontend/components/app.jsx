import React from "react";
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import ModalContainer from './modal/modal_container';
import NavHeadContainer from './header/nav_head_container';
import UserShowContainer from './user_show/user_show_container';

const App = () => (
  <div>
    <ModalContainer />
    <NavHeadContainer />
    <ProtectedRoute path="/users/:userId" component={UserShowContainer} />

  </div>
);

export default App;