import Vue from 'vue'
import App from './App.vue'
import LButton from '@c/Button.vue'

Vue.config.productionTip = false
Vue.component(LButton.name, LButton)

new Vue({
  render: h => h(App)
}).$mount('#app')
