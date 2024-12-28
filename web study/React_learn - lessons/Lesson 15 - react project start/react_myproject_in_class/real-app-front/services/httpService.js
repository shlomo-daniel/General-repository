import axios from "axios";
import config from "../src/config.json";

axios.defaults.baseURL = config.apiUrl;

export function setCommonHeader(header, value) {
  axios.defaults.headers.common[header] = value;
}

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
  setCommonHeader,
};

export default httpService;
