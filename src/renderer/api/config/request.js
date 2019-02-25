import axios from "axios";
import { baseUrl } from "./config";

/* axios配置 */
axios.defaults.baseURL = baseUrl;
axios.defaults.headers = {
  "X-Requested-With": "XMLHttpRequest",
  "Content-Type": "application/json; charset=utf-8"
};
axios.defaults.withCredentials = true;
axios.defaults.timeout = 20000;

/* http request 拦截器 */
axios.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

/* http response 拦截器 */
axios.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    return Promise.reject(err);
  }
);

export default {
  get(url, params) {
    return axios
      .get(url, params)
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  },
  post(url, params) {
    return axios
      .post(url, params)
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  },
  put(url, params) {
    return axios
      .put(url, params)
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  },
  delete(url, params) {
    return axios
      .delete(url, params)
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  }
};
