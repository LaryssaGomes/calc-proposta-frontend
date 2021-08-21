import axios from "axios";
import { getToken } from "./auth";

class API {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:3001",
    });
    this.auth();
  }

  getOptions() {
    return {};
  }

  get(url, callback = null) {
    this.api
      .get(url, this.getOptions())
      .then((res) => {
        if (callback) callback(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }

  post(url, data, callback) {
    this.api
      .post(url, data, this.getOptions())
      .then((res) => {
        callback && callback(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }

  put(url, data, callback = null) {
    this.api
      .put(url, data, this.getOptions())
      .then((res) => {
        callback && callback(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }

  delete(url, callback) {
    this.api
      .delete(url, this.getOptions())
      .then((res) => {
        callback && callback(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }

  auth() {
    this.api.interceptors.request.use(async (config) => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }
}

export default API;
