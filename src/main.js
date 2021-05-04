import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-vue/dist/bootstrap-vue.css";
import {$,jQuery} from 'jquery';
import router from './router'
import axios from 'axios'
import iziToast from 'izitoast'


window.$ = $;
window.jQuery = jQuery;

var eventBus = new Vue();
Vue.prototype.$eventBus = eventBus;

Vue.prototype.$axios = axios;
Vue.prototype.$iziToast = iziToast;
import VueAgile from 'vue-agile'



Vue.use(VueAgile)


Vue.component('Navbar', require('./components/Navbar.vue').default)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
