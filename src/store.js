import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducers.js";

const composeEnhancers =
  typeof window === "object" && window.__REDUX__DEVTOOLS__EXTENTION__COMPOSE__
    ? window.__REDUX__DEVTOOLS__EXTENTION__COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export default store;
