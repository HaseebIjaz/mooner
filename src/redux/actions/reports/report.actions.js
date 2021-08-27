import {
    getReportService
  } from "../../../services/report.service";
  import {
    GET_REPORT
  } from "./report.types";
  import { clearSnackbar, setSnackbar, showLoader, hideLoader } from "../../../utils/global.actions";

  
  export const getReport = () => async (dispatch) => {
    try {
      dispatch(clearSnackbar());
      dispatch(showLoader());
      const { data } = await getReportService();
      console.log("report response",data.data);
      dispatch({
        type: GET_REPORT,
        payload: data.data,
      });
      dispatch(hideLoader())
    } catch (error) {
      dispatch(hideLoader());
      dispatch(setSnackbar(error.message, "error"));
    }
  };

 
  
  
  
  
  
  
  
  