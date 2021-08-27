import { 
    MLN_LIST,
    GET_MLN_BY_ID,
    GET_MLN_WITHOUT_REFERALS_BY_ID,
    GET_MLN_REFERALS_BY_ID,
} from './mln.types';

import {  
    getMMlnList,
    getMlnUser,
    MlnUserWioutReferals,
    referralsUser
} 
from '../../../services/mln.service'
import history from "../../../utils/history";
import { clearSnackbar, setSnackbar, showLoader, hideLoader } from "../../../utils/global.actions";

export const getMlnListAction = (pageNumber) => async (dispatch) => {
    try {
        dispatch(clearSnackbar())
        dispatch(showLoader())
        const { data } = await getMMlnList(pageNumber);
        dispatch({
            type: MLN_LIST,
            payload: data
        })
    } catch (error) {

        dispatch(hideLoader())
        dispatch(setSnackbar(error.message, "error"))

    }
}

export const getSingleMlnUserAction = (id) => async (dispatch) => {
    try {
        dispatch(clearSnackbar())
        dispatch(showLoader())
        const { data } = await getMlnUser(id);
        if (data) {
            dispatch({
                type: GET_MLN_BY_ID,
                payload: data
            })
        }
    } catch (error) {

        dispatch(hideLoader())
        dispatch(setSnackbar(error.message, "error"))

    }
}

export const UserWithOutReferalsAction = (id) => async (dispatch) => {
    try {
        dispatch(clearSnackbar())
        dispatch(showLoader())
        const { data } = await MlnUserWioutReferals(id);
        if (data) {
            dispatch({
                type: GET_MLN_WITHOUT_REFERALS_BY_ID,
                payload: data
            })
        }
    } catch (error) {

        dispatch(hideLoader())
        dispatch(setSnackbar(error.message, "error"))

    }
}


export const referralsUserAction = (id) => async (dispatch) => {
    try {
        dispatch(clearSnackbar())
        dispatch(showLoader())
        const { data } = await referralsUser(id);
        if (data) {
            dispatch({
                type: GET_MLN_REFERALS_BY_ID,
                payload: data
            })
        }
    } catch (error) {

        dispatch(hideLoader())
        dispatch(setSnackbar(error.message, "error"))

    }
}