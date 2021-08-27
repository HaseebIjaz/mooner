import {
  SET_CURRENT_USER,
  LOGOUT_USER,
  SET_AUTH_LOADING,
  REMOVE_AUTH_LOADING,
} from "../../actions/auth/auth.types";

const initialState = {
  isAuthenticated: localStorage.getItem("authToken") ? true : false,
  user: {},
  isAuthLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: Object.keys(action.payload).length !== 0,
        isAuthLoading: false,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: {},
        isAuthenticated: false,
        isAuthLoading: false,
      };
    case SET_AUTH_LOADING:
      return {
        ...state,
        isAuthLoading: true,
      };
    case REMOVE_AUTH_LOADING:
      return {
        ...state,
        isAuthLoading: false,
      };

    default:
      return state;
  }
};
export default authReducer;
