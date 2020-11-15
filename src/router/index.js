import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Category.vue"),
  },
  {
    path: "/products/:id",
    name: "Product",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductDetail.vue"),
  },
  {
    path: "/account",
    name: "Account",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Account.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Test.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
