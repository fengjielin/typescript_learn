import Vue from 'vue'
import App from './App.vue'
import router from './route'
import axiosRequest from './axios/request'

Vue.config.productionTip = false

const axios = new axiosRequest({
  baseURL: 'http://jsonplaceholder.typicode.com',
  timeout: 5000
});

axios.get({ url: '/posts' }).then(res => {
  console.log(res);
})
axios.get({ url: '/comments', params: { postId: 1 } }).then(res => {
  console.log(res);
})
axios.post({ url: 'posts' }).then(res => {
  console.log(res);
})
axios.put({ url: '/posts/1' }).then(res => {
  console.log(res);
})
axios.patch({ url: '/posts/1' }).then(res => {
  console.log(res);
})
axios.delete({ url: '/posts/1' }).then(res => {
  console.log(res);
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
