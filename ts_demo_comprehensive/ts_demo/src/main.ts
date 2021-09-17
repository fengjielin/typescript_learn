import Vue from 'vue'
import App from './App.vue'
import axiosRequest from './axios/request'

Vue.config.productionTip = false

const axios = new axiosRequest({
  baseURL: 'http://jsonplaceholder.typicode.com',
  timeout: 5000
});

axios.get({ url: '/posts' }).then(res => {
  console.log(res);
})

new Vue({
  render: h => h(App),
}).$mount('#app')
