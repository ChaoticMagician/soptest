import Vue from "vue";
import VueRouter from "vue-router";
import homepage from "../views/homepage.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/login.vue")
  },
  {
    path: "/home",
    name: "home",
    redirect: '/homepage',//重定向首页
    component:homepage,
    children:[
      {
        path: "/homepage",
        name: "homepage",
        components:{
          default: () => import("../components/formComponents/test1form.vue"),
        },
      },
      {
        path: "/register/input",
        name: "test2",
        components:{
          default: () => import("../components/registerComp/registerInput.vue"),
        },
      },
      {
        path: "/goods/goodsControl",
        name: "goodsControl",
        components:{
          default: () => import("../components/goodsComp/goodsControl.vue"),
        },
      },
      {
        path: "/goods/goodsQuery",
        name: "goodsQuery",
        components:{
          default: () => import("../components/goodsComp/goodsQuery.vue"),
        },
      },
    ],
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
