import React from "react";
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import ModalContainer from './modal/modal_container';
import NavHeadContainer from './header/nav_head_container';
import UserShowContainer from './user/user_show_container';
import PinCreateFormContainer from './pins/pin_create_form_container';
import PinIndexContainer from './pins/pin_index_container';

const App = () => (
  <div>
    <ModalContainer />
    <NavHeadContainer />
    <div className="app-content">
      <ProtectedRoute exact path="/" component={PinIndexContainer} />
      <ProtectedRoute path="/users/:userId" component={UserShowContainer} />
      <ProtectedRoute exact path="/builder" component={PinCreateFormContainer} />
    </div>
  </div>
);

export default App;