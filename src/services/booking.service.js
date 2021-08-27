import API from "../api";

const apiEndpoint = "/booking/";

export const getUserDetailService = async (id) =>
  await API.get(apiEndpoint + "user_management_view/"+id);
export const getUserBookingService = async (formData) =>
  await API.post(apiEndpoint + "get_booking_list/",formData);
export const changeStatusService = async (formData,id) =>
  await API.put(apiEndpoint + "booking_change_order_status/"+id+"/",formData);
export const deleteBooklingService = async (id) =>
  await API.delete(apiEndpoint + "delete_booking/"+id+"/");

