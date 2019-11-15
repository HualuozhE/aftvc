import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import axios from 'axios'
import './assets/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/font-awesome.css'

// 拦截器
axios.interceptors.request.use(
  function(config) {
    if (config.url === '/mock.json') {
      config.url = process.env.BASE_URL + 'mock.json'
    }
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
