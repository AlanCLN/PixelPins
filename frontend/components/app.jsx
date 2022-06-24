import React from "react";
import { Redirect, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import ModalContainer from './modal/modal_container';
import NavHeadContainer from './header/nav_head_container';
import UserShowContainer from './user/user_show_container';
import PinCreateFormContainer from './pins/pin_create_form_container';
import PinIndexContainer from './pins/pin_index_container';
import PinShowContainer from "./pins/pin_show_container.jsx";
import UserShowCreated from './user/user_show_created';
import UserShowSaved from './user/user_show_saved';

const App = () => (
  <div>
    <ModalContainer />
    <NavHeadContainer />
    <div className="app-content">
      <ProtectedRoute path="/users/:userId" component={UserShowContainer} />
      <ProtectedRoute path="/users/:userId/created" component={UserShowCreated} />
      <ProtectedRoute path="/users/:userId/saved" component={UserShowSaved} />
      <ProtectedRoute path="/pins/:pinId" component={PinShowContainer} />
      <ProtectedRoute exact path="/builder" component={PinCreateFormContainer} />
      <ProtectedRoute exact path="/" component={PinIndexContainer} />
    </div>
  </div>
);

export default App;