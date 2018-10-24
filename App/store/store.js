import Vue from "vue";
import Vuex from "vuex";
import form from "./modules/form";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    dataForCreateProposal: {
      components: [
        [
          {
            component: "input-element",
            fieldValue: "Fedex Annual Sales Retreat"
          },
          {
            element: "select"
          },
          {}
        ]
      ]
    },
    menuData: [
      {
        title: "Welcome",
        checked: true,
        disabled: true,
        subpages: [
          {
            title: "Your Proposal",
            to: "/cmseditor/welcome/",
            checked: true,
            disabled: true
          }
        ]
      },
      {
        title: "Other Pages",
        checked: true,
        subpages: [
          {
            title: "Second Page",
            to: "/cmseditor/secondPage/",
            checked: true
          },
          {
            title: "Third Page",
            to: "/cmseditor/thirdPage/",
            checked: true
          },
          {
            title: "Fourth Page",
            to: "/cmseditor/fourthpage/",
            checked: true
          }
        ]
      }
    ],
    styleLink: 'https://ovkoyfman.github.io/netcore-vue/css/style.css'
  },
  modules: {
    form: form
  }
});
