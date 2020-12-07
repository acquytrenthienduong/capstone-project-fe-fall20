import vuetify from "@/plugins/vuetify";
import "swiper/css/swiper.css";
import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import App from "./App.vue";
import router from "./router";
import VuetifyConfirm from 'vuetify-confirm'
import FlashMessage from "@smartweb/vue-flash-message";
import store from './store'
import LoadScript from 'vue-plugin-load-script';

Vue.config.productionTip = false;
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'
Vue.use(SequentialEntrance);


Vue.use(LoadScript);
Vue.use(FlashMessage);
Vue.use(VueAwesomeSwiper /* { default options with global component } */);
Vue.use(VuetifyConfirm, {
  vuetify,
  buttonTrueText: 'Tôi muốn đổi',
  buttonFalseText: 'Không',
  color: 'warning',
  title: 'Đổi lịch',
  width: 350,
  property: '$confirm'
})

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
  store,
  render: (h) => h(App)
}).$mount("#app");
