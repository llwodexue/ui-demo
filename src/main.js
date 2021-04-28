import Vue from 'vue'
import App from './App.vue'
import LButton from '@c/Button/index.vue'
import router from './router/index'
import 'normalize.css/normalize.css'

Vue.config.productionTip = false
Vue.component(LButton.name, LButton)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
