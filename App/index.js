import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import TodoList from './components/Todo/TodoList.vue'
import ForecastList from './components/ForecastList/ForecastList.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)

const routes = [{
    path: '/',
    component: App,
    children: [{
            path: 'todo',
            component: TodoList
        },
        {
            path: 'forecast',
            component: ForecastList
        }
    ]
}]

const router = new VueRouter({
    linkExactActiveClass: 'active',
    routes,
    mode: 'history'
})

new Vue({
    el: '#app',
    template: "<div><router-view></router-view></div>",
    router
})