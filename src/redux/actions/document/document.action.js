import {

    getApprovedService,
    getAllPendingDocument,
    deletePendingDoc,
    getPendingDocumentById,
    updateDocument
  } from "../../../services/document.service";
  import {
    GET_APPROVED_DOCUMENTS,
    GET_PENDING_DOC_lIST,
    DELETE_PENDING_DOC,
    GET_PENDING_DOC_BY_ID,
    REMOVE_PENDING_DOC_LOADING,
    DELETE_APPROVED_DOC
  } from "./document.types";
  import { clearSnackbar, setSnackbar, showLoader, hideLoader } from "../../../utils/global.actions";
  import history from "../../../utils/history";
  
  export const getApprovedDocuments = (pagenumber) => async (dispatch) => {
    try {
      dispatch(clearSnackbar());
      dispatch(showLoader());
      const { data } = await getApprovedService(pagenumber);
      dispatch({
        type: GET_APPROVED_DOCUMENTS,
        payload: data.data,
      });
      dispatch(hideLoader())
    } catch (error) {
      dispatch(hideLoader());
      dispatch(setSnackbar(error.message, "error"));
    }
  };
export const getAllPendingDoc = (pageNumber) => async (dispatch) => {
    try {
        dispatch(clearSnackbar())
        dispatch(showLoader())
        const { data } = await getAllPendingDocument(pageNumber);
        dispatch({
            type: GET_PENDING_DOC_lIST,
            payload: data
        })
    } catch (error) {
        dispatch(hideLoader())
        dispatch(setSnackbar(error.message,"error"))

    }
}

export const getPendingDoceByIdAction = (id) => async (dispatch) => {
    try {
        dispatch(clearSnackbar())
        dispatch(showLoader())
        const  {data}  = await getPendingDocumentById(id);
        dispatch({
            type: GET_PENDING_DOC_BY_ID,
            payload: data.data[0]
        })        
    } catch (error) {
        dispatch(hideLoader())
        dispatch(setSnackbar(error.message,"error"))
    }
}

export const deletePendingDocAction = (id) => async (dispatch) => {
    try {
        dispatch(clearSnackbar())
        dispatch(showLoader())
        const  data  = await deletePendingDoc(id);
        if(data.status === 204){
            dispatch({
                type: DELETE_PENDING_DOC,
                payload:id
            })
            dispatch(setSnackbar("Document successfully deleted", "success"));
            dispatch(hideLoader())
        }
    } catch (error) {
        dispatch(hideLoader())
        dispatch(setSnackbar(error.message,"error"))

    }
}
export const deleteApprovedAction = (id) => async (dispatch) => {
    try {
        dispatch(clearSnackbar())
        dispatch(showLoader())
        const  data  = await deletePendingDoc(id);
        if(data.status === 204){
            dispatch({
                type: DELETE_APPROVED_DOC,
                payload:id
            })
            
            dispatch(setSnackbar("Document successfully deleted", "success"));
            dispatch(hideLoader())
        }
    } catch (error) {

        dispatch(hideLoader())
        dispatch(setSnackbar(error.message,"error"))

    }
}

export const updateDocumentAction = (formData, id,) => async (dispatch) => {
    try{
        dispatch(clearSnackbar())
        dispatch(showLoader())
        const  {data}  = await updateDocument(formData, id);
        // dispatch({
        //     type: UPDATE_DOCUMENT,
        //     payload: data
        // })
        history.push({ pathname: '/mooner/details/document_management' });
        dispatch(setSnackbar("Document Aproved successfully", "success"));
        
    }
    catch(error){

        dispatch(hideLoader())
        dispatch(setSnackbar(error.message,"error"))
    }
}