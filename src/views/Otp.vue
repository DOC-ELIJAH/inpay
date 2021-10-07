<template>
    <div>
     <div v-if="errorMessage" class="alert alert-danger">
         <p v-for="err in errorMessage" >
             {{ err.msg }}
         </p>
    
    </div> 

    <v-form @submit.prevent="otpSubmit">
        <h3 style="text-align:center">Please enter the otp that was sent to you.</h3>
        <v-text-field v-model="otp" type="text" >
        </v-text-field>
        <button type="submit" class="btn btn-primary float-right">Submit</button>
    </v-form>
    </div>
</template>
<script>
const { userOtp }=require("../services/AccountServices");

    module.exports = {
        data(){
          return {
            errorMessage:'',
            otp: '',
            
          }
        },
        methods: {
           otpSubmit(){
                let btn=document.querySelector(".btn-primary");
                btn.innerHTML='<div class="spinner-border text-info"></div>'
                btn.setAttribute("disabled", true)
                let payload={
                  'otp_code':this.otp
                }
                const result = userOtp(payload);
               
                result.then(res=>{
                  if(res.statusCode!=200){
                    this.errorMessage=res.errors
                    btn.innerHTML='Submit'
                    btn.removeAttribute("disabled", null)
                  }else{
                      localStorage.setItem("token", res.message.accessToken);
                      localStorage.setItem("refreshToken", res.message.refreshToken);
                      this.$router.push({path:'/merchant-profile'});
                  }
                })  
             
          },

        }
    }
</script>
