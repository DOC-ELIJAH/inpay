import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import '@/assets/css/app.min.css'
import '@/assets/css/custom.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuelidate from 'vuelidate';
import VueSweetalert2 from 'vue-sweetalert2';


Vue.config.productionTip = false
axios.interceptors.request.use(
  request=>{
  //  request.headers.ContentType='application/json';
    request.headers.Accept='application/json';
    if(request.url.includes('secured')){
      request.headers.Authorization='Bearer '+localStorage.getItem('token')
    }
    return request;
  },
  error=>{
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response=>{
    
    if(response.data.statusCode==900){
      localStorage.removeItem("token")
      localStorage.setItem("failedAuth", "You need to login before you can proceed.");
      router.push(path, "/auth/login");
    }else{
      return response;
    }
    
  }
)

Vue.use(VueAxios, axios, Vuelidate, VueSweetalert2)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')


