import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//element UI
Vue.config.productionTip = false
import './plugins/element.js'
//连接后端
import axios from "axios"


Vue.prototype.$http=axios.create({
  baseURL:' '
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
