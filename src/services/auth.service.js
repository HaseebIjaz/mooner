import API from "../api";

const apiEndpoint = "/account/";

export const login = async (login) =>
  await API.post(apiEndpoint + "admin_login/", login);

export const forgotPassword = async (data) =>
  await API.post(apiEndpoint + "admin_forgot_password/", data);

export const resetPassword = async (user_id, token, data) =>
  await API.post(
    apiEndpoint + "admin_reset_password/" + user_id + "/" + token + "/",
    data
  );

export const getCurrentUser = async () =>
  await API.get(apiEndpoint + "admin_profile/");
