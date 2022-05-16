import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  // baseURL: "http://192.168.100.10:5000/",
  baseURL: "https://maisadmin.herokuapp.com/",
});

api.interceptors.request.use(
  function (config) {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);

export default api;
