import { createStore, applyMiddleware } from "redux";
import authReducer from "./authReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const configureStore = (addLogger = true) => {
  const middleware = addLogger
    ? applyMiddleware(thunk, logger)
    : applyMiddleware(thunk);
  const store = createStore(authReducer, middleware);

  store.subscribe(() => {
    localStorage.setItem("hoax-auth", JSON.stringify(store.getState()));
  });

  return store;
};

export default configureStore;
