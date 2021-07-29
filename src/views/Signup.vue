<template>
    <div>
    <div v-if="errorMessage" class="alert alert-danger">{{this.errorMessage}}</div>
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
                      </div>

                      <div class="form-group">
                        <label class="font-weight-semibold" for="lastName">Last Name <span class="required-feilds">*</span></label>
                        <input type="text" name="lastName" v-model="lastName" class="form-control" placeholder="Last Name" 
                        required
                         @input="$v.lastName.$touch()"
                        @blur="$v.lastName.$touch()"
                        >
                      </div>

                      <div class="form-group">
                        <label class="font-weight-semibold" for="businessName">Business Name <span class="required-feilds">*</span></label>
                        <div class="input-affix">
                           <i class="prefix-icon anticon anticon-bank"></i>
                           <input type="text" name="businessName" v-model="businessName" class="form-control" placeholder="Business Name" required>
                        </div>
                      </div>

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
                      </div>

                        <div class="form-group">
                            <label class="font-weight-semibold" for="password"
                              >Password: <span class="required-feilds">*</span></label
                            >
                            <div class="input-affix m-b-10">
                              <i class="prefix-icon anticon anticon-lock"></i>
                              <input
                                type="password"
                                class="form-control"
                                v-model="password"
                                placeholder="Password"
                                pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
                                required
                              />
                              <i toggle="#password" class="suffix-icon anticon anticon-eye toggle-password"></i>
                              <!-- <span class="invalid-feedback">Please enter at least one upper case.</span> -->
                            </div>
                              <div class="invalid-feedback">Please enter at least one upper case.</div>
                        </div>  
                      <button @click="submit" class="btn btn-primary w-100 mb-3" >Create Account</button>
                      <span class="font-size-13 text-muted text-center d-block">
                        By clicking the “Create Account” button, you agree to INPAY's <a href="#" style="color: blue">terms of acceptable use</a>, <a href="#" style="color: blue">Merchant Agreement</a> and <a href="#" style="color: blue">Privacy Policy.</a>      
                      </span>
                    </form>
                <span class="font-size-13 text-muted d-block text-center">
                      Already have an account?
                      <a class="blue" href="/auth/login"> Login </a>
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
              // businessName: {
              //   required,
              // },
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
          errorMessage:'',
            successMessage:'',
            firstName: '',
            lastName: '',
            businessName: '',
            email: '',
            phoneNumber: '',
            password: ''
         }),
       
        methods: {
          submit () {
              this.$v.$touch();
              if(this.$v.$invalid){
                this.errorMessage="one or more field is not properly fill"
                console.log(this.$v.$error)
              }else{
                 let payload={
                  firstname:this.firstName,
                  lastname:this.lastName,
                  businessName:this.businessName,
                  email:this.email,
                  phone:this.phoneNumber,
                  password:this.password
                }
                const result = createAccount(payload);
                result.then(res=>{
                  if(res.statusCode!=200){
                    this.errorMessage="";
                    res.errors.forEach(err=>{
                      this.errorMessage=this.errorMessage+err.msg+' \n';
                    })
                  }else{
                    this.successMessage="Account created successfully and a connfirmation email have been sent to you "
                    console.log(res)
                  }
                })
              }
          },
           
        }
    }
</script>