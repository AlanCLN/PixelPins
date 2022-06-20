import React from "react";
import { Route } from 'react-router-dom';
// import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util.jsx';
import ModalContainer from './modal/modal_container';
import NavHeadContainer from './header/nav_head_container';

const App = () => (
  <div>
    <ModalContainer />
    <NavHeadContainer />
    {/* <Route path="/" component={GreetingContainer}/> */}

  </div>
);

export default App;