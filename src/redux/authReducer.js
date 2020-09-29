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
  } else if (action.type === "update-success") {
    return {
      ...state,
      displayName: action.payLoad.displayName,
      image: action.payLoad.image,
    };
  }
  return state;
}
