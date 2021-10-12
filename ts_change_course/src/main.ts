import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axiosRequest from './axios/request'
import './assets/css/common.css'
import qs from 'qs'

Vue.config.productionTip = false

const axios = new axiosRequest({
  // baseURL: 'http://zjkj.gzzjxx.cn:8014/changeCourse/',
  baseURL: 'http://127.0.0.1:3000/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
});

Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;

// axios.get({ url: '/posts' }).then(res => {
//   console.log(res);
// })
// axios.get({ url: '/comments', params: { postId: 1 } }).then(res => {
//   console.log(res);
// })
// axios.post({ url: 'posts' }).then(res => {
//   console.log(res);
// })
// axios.put({ url: '/posts/1' }).then(res => {
//   console.log(res);
// })
// axios.patch({ url: '/posts/1' }).then(res => {
//   console.log(res);
// })
// axios.delete({ url: '/posts/1' }).then(res => {
//   console.log(res);
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
