<template>
    <div>
    <div v-if="errorMessage || errorMessages"  class="d-flex justify-content-center alert alert-danger">
      <div class="container">
         <ul>
          <li v-for="err in errorMessages">
            {{err.msg}}
          </li>
          <span v-if="errorMessage">{{errorMessage}}</span>
        </ul>
      </div>
    </div>
    <div v-if="successMessage" class="alert alert-success">{{this.successMessage}}</div>
      <div
        class="d-flex align-items-center justify-content-between m-b-30"
        >
                      <h2 class="m-b-0">You are a step closer to creating an INPAY account.</h2>
                    </div>
                    <form @submit.prevent="submit">

                      <div class="form-group">
                        <label class="font-weight-semibold" for="firstName">First Name <span class="required-feilds">*</span></label>
                        <input type="text" 
                        name="firstName" 
                        v-model="firstName" 
                        class="form-control" 
                        placeholder="First Name" 
                        required
                        @input="$v.firstName.$touch()"
                        @blur="$v.firstName.$touch()"
                        >
                        <div class="invalid" v-if="$v.firstName.$dirty && $v.firstName.$invalid">Firstname is required</div>
                        <div class="invalid" v-if="errors.firstName">{{errors.firstName}}</div>
                      </div>
                      
                      <div class="form-group">
                        <label class="font-weight-semibold" for="lastName">Last Name <span class="required-feilds">*</span></label>
                        <input 
                          type="text" 
                          name="lastName" 
                          v-model="lastName" 
                          class="form-control" 
                          placeholder="Last Name" 
                        required
                         @input="$v.lastName.$touch()"
                        @blur="$v.lastName.$touch()"
                        >
                        <div class="invalid" v-if="$v.lastName.$dirty && $v.lastName.$invalid">Lastname is required</div>
                        <div class="invalid" v-if="errors.lastName">{{errors.lastName}}</div>
                      </div>

                      <!-- <div class="form-group">
                         <label class="font-weight-semibold" for="businessName">Business Name <span class="required-feilds">*</span></label>
                         <div class="input-affix">
                            <i class="prefix-icon anticon anticon-bank"></i>
                            <input type="text" name="businessName" v-model="businessName" class="form-control" placeholder="Business Name" required>
                         </div>
                       </div>-->

                      <div class="form-group">
                        <label class="font-weight-semibold" for="email"
                          >Email: <span class="required-feilds">*</span></label
                        >
                        <div class="input-affix">
                          <i class="prefix-icon anticon anticon-mail"></i>
                          <input
                            type="email"
                            class="form-control"
                            v-model="email"
                            placeholder="Email"
                            required
                          />
                        </div>
                        <div class="invalid" v-if="$v.email.$dirty && $v.email.$invalid">pls provide a valid email</div>
                        <div class="invalid" v-if="errors.email">{{errors.email}}</div>
                      </div>

                      <div class="form-group">
                        <label class="font-weight-semibold" for="phoneNumber">Phone Number <span class="required-feilds">*</span></label>
                        <div class="input-affix m-b-10">
                          <i class="prefix-icon anticon anticon-phone"></i>
                          <input type="tel" class="form-control" 
                          name="phoneNumber" 
                          v-model="phoneNumber" 
                          placeholder="08082821122" 
                          pattern="^[0]\d{8,10}$" 
                          onkeypress="return /\d/.test(String.fromCharCode(((event||window.event).which||(event||window.event).which)));" maxlength="11" required>  
                        </div> 
                       <div class="invalid" v-if="$v.phoneNumber.$dirty && $v.phoneNumber.$invalid">phone number is required</div>
                          <div class="invalid" v-if="errors.phoneNumber">{{errors.phoneNumber}}</div>
                      </div>

                        <div class="form-group">
                            <label class="font-weight-semibold" for="password"
                              >Password: <span class="required-feilds">*</span></label>
                            <div v-if="passwordHidden" class="input-affix m-b-10">
                              <i @click="hidePassword()" class="prefix-icon anticon anticon-lock"></i>
                              <input
                              id="password"
                                type="password"
                                class="form-control"
                                v-model="password"
                                placeholder="Password"
                                pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
                                required
                              />
                              <i @click="showPassword()" toggle="#password" class="suffix-icon anticon anticon-eye toggle-password"></i>
                              <!-- <span class="invalid-feedback">Please enter at least one upper case.</span> -->
                            </div>
                              <div class="invalid-feedback">Please enter at least one upper case.</div>
                        </div>  
                      <button @click="submit" class="btn btn-primary w-100 mb-3">Create Account</button>
                      <span class="font-size-13 text-muted text-center d-block">
                        By clicking the “Create Account” button, you agree to INPAY's <a href="#" style="color: blue">terms of acceptable use</a>, <a href="#" style="color: blue">Merchant Agreement</a> and <a href="#" style="color: blue">Privacy Policy.</a>      
                      </span>
                    </form>
                <span class="font-size-13 text-muted d-block text-center">
                      Already have an account?
                      <router-link to="/auth/login"><a class="blue"> Login </a></router-link>
                </span>
                </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
import { createAccount } from '../services/AccountServices'
export default {
      mixins: [validationMixin],
       validations: {
              firstName: {
                required,
              },
              lastName: {
                required,
              },
             
              email: {
                required,
                email
              },
              phoneNumber: {
                required,
                maxLength: maxLength(11)
              },
              password: {
                required,
              }
        },
        data: () => ({
            passwordHidden : {
              default: false,
              type: Boolean,
            },
            errorMessages:'',
            successMessage:'',
            errorMessage:'',
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: '',
            errors :{
              firstName: '',
              lastName: '',
              email: '',
              phoneNumber: '',
              password: ''
            }
         }),
       
        methods: {
          showPassword () {
            // this.passwordHidden = false
         let pass = document.getElementById('password');
         if(pass.type == 'password'){
           pass.type = 'text'
         }else{
           pass.type = 'password'
         }
          },
        
          submit () {
            this.errorMessages=''
            this.errorMessage=''
            this.errors.firstName=''
            this.errors.lastName=''
            this.errors.email=''
            this.errors.phoneNumber=''
            this.errors.password=''
              this.$v.$touch();
              if(this.$v.$invalid){
                this.errorMessage="one or more field is not properly fill"
              }else{
                let btn=document.querySelector(".btn-primary");
                 btn.innerHTML='<div class="spinner-border text-info"></div>'
                 btn.setAttribute("disabled", true)
                 
                 let payload={
                  firstname:this.firstName,
                  lastname:this.lastName,
                  email:this.email,
                  phone:this.phoneNumber,
                  password:this.password
                }
                const result = createAccount(payload);
                result.then(res=>{
                  if(res.statusCode!=201){
                    this.errorMessages=res.errors
                    this.errorMessages.forEach(e=>{
                       if(e.msg.includes('E-mail')){
                         this.errors.email=e.msg
                       }

                      if(e.msg.includes('Phone')){
                         this.errors.phoneNumber=e.msg
                       }
                       
                    })
                    btn.innerHTML='Create Account'
                    btn.removeAttribute("disabled", null)
                  }else{
                    this.successMessage=res.email_notify
					          btn.innerHTML='Create Account'
                    btn.removeAttribute("disabled", null)
                    this.firstName="";
                    this.lastName="";
                    this.email="";
                    this.phoneNumber="";
                    this.password="";
                    this.$v.$reset()
                  }
                  //this.$router.push({path:'/auth/account-confirm/'});
                }).catch(err=>{
                  this.errorMessage=err;
                   btn.innerHTML='Create Account'
                  btn.removeAttribute("disabled", null)
                })
              }              
          }
        },
    }
</script>