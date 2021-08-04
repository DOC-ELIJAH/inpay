<template>
    <v-form @submit.prevent="otpSubmit">
        <h3 style="text-align:center">Please enter the otp that was sent to you.</h3>
        <v-text-field v-model="otp" type="text" >
        </v-text-field>
        <button type="submit" class="btn btn-primary float-right">Submit</button>
    </v-form>
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

                let payload={
                  'otp_code':this.otp
                }

                const result = userOtp(payload);
               
                result.then(res=>{
                  if(res.statusCode!=200){
                    this.errorMessage=res.errors
                  }else{
                      console.log(res.access_token)
                      localStorage.setItem("accessToken", res.access_token);
                      localStorage.setItem("refreshToken", res.refresh_token);
                    // localStorage.setItem('token', res.token);
                      this.$router.push({path:'/'});
                  }
                })  
             
          }
        }
    }
</script>
