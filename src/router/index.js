import Vue from "vue";
import VueRouter from "vue-router";
import middleware from './middleware'
import store from '../store'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/navatan",
    name: "Default",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/navatan",
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
    path: "/gallery",
    name: "Gallery",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Gallery.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Products.vue"),
  },
  {
    path: "/schedule/:type",
    name: "Schedule",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Schedule.vue"),
  },
  {
    path: "/account",
    name: "Account",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Account.vue"),
  },
  {
    path: "/contactus",
    name: "ContactUs",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactUs.vue"),
  },
  {
    path: "/orders",
    name: "Orders",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Orders.vue"),
  },
  {
    path: "/loi",
    name: "Test",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Test.vue"),
  },
  {
    path: "/404",
    name: "errorpage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Error/404.vue"),
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
  base: '/',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
      }
    }

    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
});

if (router.push) {
  const temp = router.push
  router.push = function(...args) {
    return new Promise((resolve, reject) => {
      if (args.length == 1) {
        // On Complete handler
        args.push(() => {})
      }
      if (args.length == 2) {
        // On Abort handler
        args.push((error) => {
          if (error && error.name !== 'NavigationDuplicated') {
            reject(error)
          }
        })
      }
      resolve(temp.call(this, ...args))
    })
  }
}

// Overwrie router replace function to handle NavigationDuplicated error
if (router.replace) {
  const temp = router.replace
  router.replace = function(...args) {
    return new Promise((resolve, reject) => {
      if (args.length == 1) {
        // On Complete handler
        args.push(() => {})
      }
      if (args.length == 2) {
        // On Abort handler
        args.push((error) => {
          if (error && error.name != 'NavigationDuplicated') {
            reject(error)
          }
        })
      }
      resolve(temp.call(this, ...args))
    })
  }
}

// debugger
middleware(router, store)

// beforeResolve hook
router.beforeResolve(async (routeTo, routeFrom, next) => {
  try {
    for (const route of routeTo.matched) {
      await new Promise((resolve, reject) => {
        if (route.meta && route.meta.beforeResolve) {
          route.meta.beforeResolve(routeTo, routeFrom, (...args) => {
            if (args.length) {
              next(...args)
              reject(new Error('Redirected'))
            } else {
              resolve()
            }
          })
        } else {
          resolve()
        }
      })
    }
  } catch (error) {
    return
  }

  next()
})

export default router;
