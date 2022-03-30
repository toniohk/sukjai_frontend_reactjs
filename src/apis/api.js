import axios from "axios";
import config from '../config';

import { getCookie } from '../utils';

const api = axios.create();

api.interceptors.request.use(
  request => {
    let baseURL = config.API_BASE_URL || '';
    request.url = baseURL + request.url;

    let token = getCookie('token');
    if (token) {
      request.headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': '*/*'
      };
    }

    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;