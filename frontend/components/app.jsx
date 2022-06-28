import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ModalContainer from './modal/modal';
import NavHeadContainer from './header/nav_head';
import UserShowContainer from './user/user_show';
import PinIndexContainer from './pins/pin_index';
import PinShowContainer from "./pins/pin_show";
import UserShowCreatedContainer from './user/user_show_created';
import UserShowSavedContainer from './user/user_show_saved';
import PinCreateFormContainer from './pins/pin_create_form_container';
import PinEditFormContainer from './pins/pin_edit_form_container';
import SplashPage from "./splash/splash";

const App = () => (
  <div>
    <ModalContainer />
    <NavHeadContainer />
    <div className="app-content">
      <AuthRoute exact path="/" component={SplashPage}/>
      <ProtectedRoute path="/users/:userId" component={UserShowContainer} />
      <ProtectedRoute path="/users/:userId/created" component={UserShowCreatedContainer} />
      <ProtectedRoute path="/users/:userId/saved" component={UserShowSavedContainer} />
      <ProtectedRoute path="/pins/:pinId/edit" component={PinEditFormContainer} />
      <ProtectedRoute exact path="/pins/:pinId" component={PinShowContainer} />
      <ProtectedRoute exact path="/builder" component={PinCreateFormContainer} />
      <ProtectedRoute exact path="/" component={PinIndexContainer} />
    </div>
  </div>
);

export default App;