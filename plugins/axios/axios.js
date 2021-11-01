import Vue from "vue";
import { staticApi, appApi } from "~/plugins/axios/instance";

Vue.prototype.$axiosStatic = staticApi;
Vue.prototype.$axiosApp = appApi;
// Vue.use(api)

export default function ({ $axios, redirect }) {
  $axios.onError((error) => {
    if (error.response.status === 500) {
      console.log("500");
      redirect("/500");
    }

    if (error.response.status === 404) {
      console.log("404");
      redirect("/404");
    }
  });
}
