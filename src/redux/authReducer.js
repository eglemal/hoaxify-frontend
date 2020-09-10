const initialState = {
  id: 0,
  username: "",
  displayName: "",
  image: "",
  password: "",
  isLoggedIng: false,
};

export default function authReducer(state = initialState, action) {
  if (action.type === "logout-success") {
    return { ...initialState };
  } else if (action.type === "login-success") {
    return {
      ...action.payLoad,
      isLoggedIn: true,
    };
  }
  return state;
}
