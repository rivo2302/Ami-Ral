
import Vue from 'vue'
import app from './App.vue'

import axios from 'axios'

import VueAxios from 'vue-axios'

import VueOffline from 'vue-offline'

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/src/jquery.js'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import router from './router';
import { store } from './store';
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)

import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(AOS)
Vue.use(VueOffline)
import { TabsPlugin } from 'bootstrap-vue'
Vue.use(TabsPlugin)
import { FormFilePlugin } from 'bootstrap-vue'
Vue.use(FormFilePlugin)
Vue.config.productionTip =  true

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')


