import { createStore, applyMiddleware } from "redux";
import authReducer from "./authReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import * as apiCalls from "../api/apiCalls";

const configureStore = (addLogger = true) => {
  let localStorageData = localStorage.getItem("hoax-auth");

  let persisistedStage = {
    id: 0,
    username: "",
    displayName: "",
    image: "",
    password: "",
    isLoggedIng: false,
  };
  if (localStorageData) {
    try {
      persisistedStage = JSON.parse(localStorageData);
      apiCalls.setAuthorizationHeader(persisistedStage);
    } catch (error) {}
  }

  const middleware = addLogger
    ? applyMiddleware(thunk, logger)
    : applyMiddleware(thunk);
  const store = createStore(authReducer, persisistedStage, middleware);

  store.subscribe(() => {
    localStorage.setItem("hoax-auth", JSON.stringify(store.getState()));
    apiCalls.setAuthorizationHeader(store.getState());
  });

  return store;
};

export default configureStore;
