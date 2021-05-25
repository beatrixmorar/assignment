import Vue from 'vue'
import App from './App.vue'
import router from '../router';
import { makeServer } from "./server"

Vue.config.productionTip = false

if (process.env.NODE_ENV === "development") {
    makeServer()
}

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
