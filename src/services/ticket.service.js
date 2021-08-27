import API from "../api";

const apiEndpoint = "/ticket_management/";

export const getTicketsService = async (pagenumber) =>
  await API.get(apiEndpoint + `get_ticket/?${pagenumber}`);
export const getTicketService = async (id) =>
  await API.get(apiEndpoint + `edit_ticket/${id}/`);
export const deleteTicketService = async (id) =>
  await API.delete(apiEndpoint + `edit_ticket/${id}/`);
export const updateTicketService = async (formData,id) => await API.put(apiEndpoint + `edit_ticket/${id}/`,formData);

