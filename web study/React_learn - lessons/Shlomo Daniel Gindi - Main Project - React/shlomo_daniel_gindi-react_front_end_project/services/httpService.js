import config from "../src/config.json";
import axios from "axios";

axios.defaults.baseURL = config.apiUrl;

export function setDefaultCommonHeaders(headerName, value) {
  axios.defaults.headers.common[headerName] = value;
}

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
  setDefaultCommonHeaders,
};
export default httpService;
