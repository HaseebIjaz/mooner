
import API from "../api";

const apiEndpoint = "/ticket_management/";

export const getReportService = async () =>
  await API.get(apiEndpoint + `get_report/`);

