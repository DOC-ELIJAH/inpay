<template>    
        <div class="container">
            <div v-if="errorMessage" class="alert alert-danger">
              <p>{{errorMessage}}</p>
            </div>
            
            <div v-if="successMessage" class="alert alert-info">
                  {{successMessage}}
            </div>
          
        <a href="javascript:void(0)" class="float-right" @click="changeInput" >Login with {{inputType === 'email' ? 'Phone': 'Email'}}</a>
        <br>
        <hr>
        <form @submit.prevent="handleSubmit">
          <div class="form-group" v-if="inputType === 'email'">
            <label class="font-weight-semibold" for="userName"
              >Email: <span class="required-feilds">*</span></label
            >
            <div class="input-affix">
              <i class="prefix-icon anticon anticon-mail"></i>
              <input
                type="email"
                class="form-control"
                v-model="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
          </div>
          
          <div class="form-group" v-else>
            <label class="font-weight-semibold" for="phone"
              >Phone: <span class="required-feilds">*</span></label
            >
            <div class="input-affix">
              <i class="prefix-icon anticon anticon-phone"></i>
              <input
                type="tel"
                class="form-control"
                v-model="phoneNumber"
                id="phone"
                placeholder="+234 703 445 2342"
                required
              />
            </div>
          </div>

        

          <div class="form-group">
            <label class="font-weight-semibold" for="password"
              >Password: <span class="required-feilds">*</span></label
            >
            <a
              class="float-right font-size-13 text-muted"
              href="/forgot-password"
              >Forget Password?</a
            >
            <div class="input-affix m-b-10">
              <i class="prefix-icon anticon anticon-lock"></i>
              <input
                type="password"
                class="form-control"
                v-model="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <div
              class="d-flex align-items-center justify-content-between"
            >
              <span class="font-size-13 text-muted">
                Don't have an account?
                <router-link to="/auth/signup"><a class="small"> Signup</a></router-link>
              </span>
              <button type="submit" class="btn btn-primary">Sign In</button>
            </div>
          </div>
        </form>
        </div>
</template>

<script>

import { userLogin } from '../services/AccountServices'
export default {

  created(){
    const confirm=localStorage.getItem('confirmed')
    const failedAuth=localStorage.getItem('failedAuth');
    if(confirm!=null){
      this.successMessage=confirm
      localStorage.removeItem('confirmed')
    }

    if(failedAuth){
      this.errorMessage=failedAuth
      localStorage.removeItem('failedAuth')
    }
  },
   data(){
      return {
        errorMessage:'',
        inputType: 'email',
        email: '',
        password: '',
        phoneNumber: '',
        successMessage:'',
        
      }
    },
    methods: {
      changeInput(){
        if (this.inputType === 'email'){
          this.inputType = 'phone'
          
        }
        else this.inputType = 'email'
      },
        handleSubmit(){
        if (this.phoneNumber){
          let btn=document.querySelector(".btn-primary");
          btn.innerHTML='<div class="spinner-border text-info"></div>'
          btn.setAttribute("disabled", true)

          let payload={
              'login_type': 'phone',
              'username':this.phoneNumber,
              'password':this.password
            }
            console.log(payload)
            this.loading = true;
            const result = userLogin(payload);
            result.then(res=>{
              if(res.statusCode!=200){
                this.errorMessage=res.message
                  btn.innerHTML='Sign In'
                  btn.removeAttribute("disabled", null)
              }else{
                 this.$router.push({path:'/auth/otp'});
              }
            })  
          
        }
        else 
            this.inputType = 'email'
            let btn=document.querySelector(".btn-primary");
            btn.innerHTML='<div class="spinner-border text-info"></div>'
            btn.setAttribute("disabled", true)
            let payload={
              'login_type': 'email',
              'username':this.email,
              'password':this.password
            }
            this.loading = true;
            const result = userLogin(payload);
            result.then(res=>{
              if(res.statusCode!=200){
                this.errorMessage=res.message
                btn.innerHTML='Sign In'
                btn.removeAttribute("disabled", null)
              }else{
                this.$router.push({path:'/auth/otp'});
              }
            })  
      }
    }
}
</script>

