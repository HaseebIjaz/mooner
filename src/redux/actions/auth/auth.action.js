import history from "../../../utils/history";
import { login, getCurrentUser } from "../../../services/auth.service";
import {
  setAuthTokenToEachRequest,
  saveAuthToken,
  removeAuthToken,
} from "../../../utils/auth.token";
// import { setLoading, clearErrors, setSnackbar, setErrors } from "../../../utils/global.actions";
import { clearSnackbar, setSnackbar, showLoader, hideLoader } from "../../../utils/global.actions";
import {
  SET_CURRENT_USER,
  LOGOUT_USER,
  SET_AUTH_LOADING,
  REMOVE_AUTH_LOADING,
} from "./auth.types";

export const setCurrentUser = (token) => {
  return async (dispatch) => {
    try {
      setUser(dispatch, token,false);
    } catch (error) {
      dispatch(setSnackbar(error.response.data.message, "error"));
      dispatch(hideLoader());
    }
  };
};

export const logoutUserAction = () => {
  return (dispatch) => {
    removeAuthToken();
    setAuthTokenToEachRequest(false);

    dispatch({
      type: LOGOUT_USER,
    });
  };
};

export const loginUserAction = (data) => {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      dispatch(clearSnackbar());
      const res = await login(data);
       if(res.data.status){
        const { access } = res?.data?.data;
        setUser(dispatch, access,true);
       }else{
          dispatch(setSnackbar(res?.data?.Response, "error"));
          dispatch(hideLoader());
       }
    } catch (error) {
      console.log("error=======",error.message);
      dispatch(setSnackbar(error.message === "Request failed with status code 500" ? "Internal Server Error" : error.message, "error"));
      dispatch(hideLoader());
    }
  };
};

export const setUser = async (dispatch, token,redirect) => {
  if (token) {
    saveAuthToken(token);
    setAuthTokenToEachRequest(token);
  }

  try {
    const res = await getCurrentUser();

    dispatch({
      type: SET_CURRENT_USER,
      payload: res.data.user,
    });
    if(redirect){
      history.push("/mooner/details/user_management");
    }
    
  } catch (error) {
    dispatch(setSnackbar(error.message, "error"));
    dispatch(hideLoader());
  }
};
