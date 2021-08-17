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
            loading: "",
            
          }
        },
        methods: {
           otpSubmit(){

                let payload={
                  'otp_code':this.otp
                }
                this.loading = true;
                const result = userOtp(payload);
               
                result.then(res=>{
                  if(res.statusCode!=200){
                    this.loading = false;
                    this.errorMessage=res.errors
                  }else{
                      this.loading = false;
                      localStorage.setItem("token", res.message.accessToken);
                      localStorage.setItem("refreshToken", res.message.refreshToken);
                      this.$router.push({path:'/'});
                  }
                })  
             
          },

        }
    }
</script>
