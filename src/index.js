import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const defaultState = {
  messages: [],
  friends: [],
  channels: [],
  currentProfile: {},
  currentChannel: null,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: action.payload,
      };
    case "CHANGE_CURRENT_CHANNEL":
      return {
        ...state,
        currentChannel: action.payload,
      };

    default:
      return state;
  }
};
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
