import {
    getUserDetailService,
    getUserBookingService,
    changeStatusService,
    deleteBooklingService
  } from "../../../services/booking.service";
  import {
    GET_USER_DETAIL,
    GET_USER_BOOKING
  } from "./booking.types";
  import {clearErrors, setErrors, showLoader,hideLoader } from "../../../utils/global.actions";
  import history from "../../../utils/history";
  
  export const getUserDetail = (id) => async (dispatch) => {
    try {
      dispatch(clearErrors());
      dispatch(showLoader());
      const { data } = await getUserDetailService(id);
      dispatch({
        type: GET_USER_DETAIL,
        payload: data,
      });
      dispatch(hideLoader())
    } catch (error) {
      dispatch(showLoader());
      dispatch(setErrors(error.message));
    }
  };
  export const getUserBookingList = (formData) => async (dispatch) => {
    try {
      dispatch(clearErrors());
      dispatch(showLoader());
      const { data } = await getUserBookingService(formData);
      dispatch({
        type: GET_USER_BOOKING,
        payload: data,
      });
      dispatch(hideLoader())
    } catch (error) {
      dispatch(showLoader());
      dispatch(setErrors(error.message));
    }
  };
  
  export const changeStatus = (formData,id) => async (dispatch) => {
    try {
      dispatch(clearErrors());
      dispatch(showLoader());
      const { data } = await changeStatusService(formData,id);
      dispatch(hideLoader())
      history.push("/mooner/details/user_management");
    } catch (error) {
      dispatch(showLoader());
      dispatch(setErrors(error.message));
    }
  };
  export const deleteBooking = (id) => async (dispatch) => {
    try {
      dispatch(clearErrors());
      dispatch(showLoader());
      const { data } = await deleteBooklingService(id);
      dispatch(hideLoader())
      history.push("/mooner/details/user_management");
    } catch (error) {
      dispatch(showLoader());
      dispatch(setErrors(error.message));
    }
  };
  
  