import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import { logout } from './actions/session_actions';
import { openModal, closeModal } from './actions/modal_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);


  window.store = store;
  window.logout = logout;
  window.openModal = openModal;
  window.closeModal = closeModal;

  // store.dispatch(openModal('login'))







});