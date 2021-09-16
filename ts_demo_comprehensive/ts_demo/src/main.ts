import Vue from 'vue'
import App from './App.vue'
import axios from './axios/index'

Vue.config.productionTip = false

console.log(axios(1)); 

new Vue({
  render: h => h(App),
}).$mount('#app')
