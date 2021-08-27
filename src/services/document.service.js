import API from "../api";

const apiEndpoint = "/document_management/";

export const getApprovedService = async (pagenumber) =>
  await API.get(apiEndpoint + `get_document/?${pagenumber}`);
export const getAllPendingDocument = async (pageNumber) => await API.get(apiEndpoint + `get_pending_document/?page=${pageNumber}`)

export const deletePendingDoc = async (id) =>
  await API.delete(apiEndpoint + `edit_document/${id}/`);

  export const getPendingDocumentById = async (id) =>
  await API.get(apiEndpoint + `edit_document/${id}/`);

  export const updateDocument = async (data, id) =>
  await API.put(apiEndpoint + `edit_document/${id}/`, data);
