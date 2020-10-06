import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import routes from "./routes";
import store from "./store";
 
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
