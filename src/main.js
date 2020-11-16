import vuetify from "@/plugins/vuetify";
import "swiper/css/swiper.css";
import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import App from "./App.vue";
import router from "./router";
Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper /* { default options with global component } */);


Vue.filter("priceVndFormat", function (value) {
  if (!value) return "";
  return Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);
});

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
