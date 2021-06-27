import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import type { Action } from "redux";
import { Provider } from "react-redux";
import "./index.scss";
import App from "./App/App";
import rootReducer from "./reducers";
import reportWebVitals from "./reportWebVitals";

const middlewareExample =
  (storeAPI: any) => (next: Function) => (action: Action) => {
    // Do something in here, when each action is dispatched
    console.warn("in middlewareExample", { storeAPI, action });

    return next(action);
  };

const middlewareEnhancer = applyMiddleware(middlewareExample);
const store = createStore(rootReducer, middlewareEnhancer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
