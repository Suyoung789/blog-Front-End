// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.prototype.$EventBus = new Vue()
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.prototype.$http.defaults.baseURL = 'http://54.180.79.49'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
