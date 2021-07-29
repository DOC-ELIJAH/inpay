import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import '@/assets/css/app.min.css'
import '@/assets/css/custom.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuelidate from 'vuelidate';

Vue.config.productionTip = false
axios.interceptors.request.use(
  request=>{
    request.headers.ContertType='application/json';
    request.headers.Accept='application/json';
    if(request.url.includes('api')){
      request.headers.Authorization='Bearer '+localStorage.getItem('token')
    }
    console.log(request)
    return request;
  },
  error=>{
    return Promise.reject(error)
  }
);
Vue.use(VueAxios, axios, Vuelidate)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')


