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
    request.headers.Authorization='Bearer '+localStorage.getItem('token')
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

// router.beforeEach((to, from, next) => {
//   if (to.meta.disableIfLoggedIn) {
//     const authUser = localStorage.getItem('token')
//       if (authUser) {
//           next({name: 'index'});
//       } else {
//           next();
//       }
//   }
//   next();
// });

export default {
  //methods: {
    //beforeRouteEnter (to, from, next) {
      //const token = localStorage.getItem('token')

      //return token ? next() : next('/auth/login')
    //}

  //}
}

Vue.use(VueAxios, axios, Vuelidate)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')


