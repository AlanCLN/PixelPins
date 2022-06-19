import React from "react";
import { Route } from 'react-router-dom';
// import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util.jsx';
import ModalContainer from './modal/modal_container';

const App = () => (
  <div>
    <ModalContainer />
    <header>
      <h1>PixelPins</h1>
      {/* <Route path="/" component={GreetingContainer}/> */}
    </header>
    {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
  </div>
);

export default App;