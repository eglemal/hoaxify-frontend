import * as apiCalls from "../api/apiCalls";

export const logginSuccess = (loginUserData) => {
  return {
    type: "login-success",
    payLoad: loginUserData,
  };
};

export const loginHandler = (credentials) => {
  return function (dispatch) {
    return apiCalls.login(credentials).then((response) => {
      dispatch(
        logginSuccess({
          ...response.data,
          password: credentials.password,
        })
      );
      return response;
    });
  };
};

export const signupHandler = (user) => {
  return function (dispatch) {
    return apiCalls.signup(user).then((response) => {
      return dispatch(loginHandler(user));
    });
  };
};
