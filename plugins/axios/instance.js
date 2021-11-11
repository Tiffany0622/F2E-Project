import axios from "axios";
import jsSHA from 'jssha'

// axios.defaults.baseURL = process.env.VUE_STATIC_API
// axios.defaults.headers.common['Authorization'] = 'YUOR_AUTH_TOKEN'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
/* 注入 Nuxt Instance Property */

/**
 * header 請求配置
 */
const getAuthorizationHeader = function () {
  const AppData = {
    // TDX 官網申請
    AppID: '4f7a1681eff2492a9e7f9654bd14bf71',
    AppKey: 'I3Hu7bqvVlqfOk8yVWphfWYVkGA',
  }

  const GMTString = new Date().toUTCString()
  const ShaObj = new jsSHA('SHA-1', 'TEXT')

  ShaObj.setHMACKey(AppData.AppKey, 'TEXT')
  ShaObj.update('x-date: ' + GMTString)

  const HMAC = ShaObj.getHMAC('B64')
  const Authorization =
    'hmac username="' +
    AppData.AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"'

  return { Authorization: Authorization, 'X-Date': GMTString }
}

const $axios = function () {
  const api = axios.create({
    baseURL: 'https://ptx.transportdata.tw/MOTC',
    // timeout: 100000,
    headers: getAuthorizationHeader(),
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

export { $axios };
