import Vue from "vue";
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import App from "./App.vue";
import CreateEdit from "./components/CreateEdit/CreateEdit.vue";
import CMSEditor from "./components/CMSEditor/CMSEditor.vue";
import welcome from "./components/CMSEditor/Welcome.vue";
import secondPage from "./components/CMSEditor/SecondPage.vue";
import thirdPage from "./components/CMSEditor/ThirdPage.vue";
import fourthPage from "./components/CMSEditor/FourthPage.vue";
import dashboard from "./components/Main/Dashboard.vue";
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes = [
  {
    path: "/",
    component: App,
    children: [
      {
        path: "/createedit",
        component: CreateEdit
      },
      {
        path: "/",
        component: dashboard
      },
      {
        path: "/cmseditor",
        component: CMSEditor,
        name: "editor",
        children: [
          {
            path: "welcome",
            component: welcome
          },
          {
            path: "secondpage",
            component: secondPage
          },
          {
            path: "thirdpage",
            component: thirdPage
          },
          {
            path: "fourthpage",
            component: fourthPage
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  linkExactActiveClass: "active",
  routes,
  mode: "history"
});

new Vue({
  el: "#app",
  template: "<div><router-view></router-view></div>",
  router
});
Vue.component("b-modal", bModal);
Vue.directive("b-modal", bModalDirective);
