import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://maisadmin.herokuapp.com",
  // baseURL: "http://localhost:5000/",
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
