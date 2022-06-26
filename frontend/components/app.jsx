import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import ModalContainer from './modal/modal_container';
import NavHeadContainer from './header/nav_head_container';
import UserShowContainer from './user/user_show_container';
import PinCreateFormContainer from './pins/pin_create_form_container';
import PinIndexContainer from './pins/pin_index_container';
import PinShowContainer from "./pins/pin_show_container.jsx";
import UserShowCreatedContainer from './user/user_show_created_container';
import UserShowSavedContainer from './user/user_show_saved_container';
import SplashPage from "./splash/splash.jsx";

const App = () => (
  <div>
    <ModalContainer />
    <NavHeadContainer />
    <div className="app-content">
      <AuthRoute path="/" component={SplashPage}/>
      <ProtectedRoute path="/users/:userId" component={UserShowContainer} />
      <Switch>
        <ProtectedRoute path="/users/:userId/created" component={UserShowCreatedContainer} />
        <ProtectedRoute path="/users/:userId/saved" component={UserShowSavedContainer} />
        <ProtectedRoute path="/pins/:pinId" component={PinShowContainer} />
        <ProtectedRoute path="/builder" component={PinCreateFormContainer} />
        <ProtectedRoute path="/" component={PinIndexContainer} />
      </Switch>
    </div>
  </div>
);

export default App;