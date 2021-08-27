import API from "../api";

const apiEndpoint = "/mln/";

export const getMMlnList = async (pageNumber) => await API.get(apiEndpoint + `list_mln_users/?page=${pageNumber}`)

export const getMlnUser = async (id) =>
  await API.get(apiEndpoint + `list_referal_users/${id}/`);

export const MlnUserWioutReferals = async (id) =>
  await API.get(apiEndpoint + `edit_user_details/${id}/`);

export const referralsUser = async (id) =>
  await API.get(apiEndpoint + `edit_referral_user_details/${id}/`);

