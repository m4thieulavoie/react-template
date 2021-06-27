import { applyMiddleware, createStore } from "redux";
import type { Action } from "redux";
import rootReducer from "./reducers";

const middlewareExample =
  (storeAPI: any) => (next: Function) => (action: Action) => {
    // Do something in here, when each action is dispatched
    console.warn("in middlewareExample", { storeAPI, action });

    return next(action);
  };

const middlewareEnhancer = applyMiddleware(middlewareExample);
const store = createStore(rootReducer, middlewareEnhancer);

export default store;
