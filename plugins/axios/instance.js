import axios from "axios";
import { context } from "@/plugins/context/init";

// axios.defaults.baseURL = process.env.VUE_STATIC_API
// axios.defaults.headers.common['Authorization'] = 'YUOR_AUTH_TOKEN'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
/* 注入 Nuxt Instance Property */

const staticApi = function () {
  const api = axios.create({
    baseURL: process.env.VUE_STATIC_API,
    // timeout: 100000,
    // headers: {
    //   'Content-Type': 'application/json',
    //   'X-Requested-With': 'XMLHttpRequest'
    // },
  });

  api.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // 響應攔截器,在響應之前執行
  api.interceptors.response.use(
    (res) => {
      return res.data;
    },
    (error) => {
      // console.log(context)
      // context.app.router.push({ name: '123123123', query: { error: 'api' } })
      return Promise.reject(error);
    }
  );

  return api;
};

const appApi = function () {
  const api = axios.create({
    baseURL: process.env.VUE_APP_API,
    // timeout: 100000,
    // headers: {
    //   'Content-Type': 'application/json',
    //   'X-Requested-With': 'XMLHttpRequest'
    // },
  });

  api.interceptors.request.use(
    (config) => {
      context.app.store.dispatch("Status/setLoading", true);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // 響應攔截器,在響應之前執行
  api.interceptors.response.use(
    (res) => {
      context.app.store.dispatch("Status/setLoading", false);
      return res.data;
    },
    (error) => {
      // console.log(context)
      // context.app.router.push({ name: 'index', query: { error: 'api' } })
      return Promise.reject(error);
    }
  );

  return api;
};

export { staticApi, appApi };
