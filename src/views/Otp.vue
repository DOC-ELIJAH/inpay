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
                      console.log(res.message.accessToken)
                      localStorage.setItem("token", res.message.accessToken);
                      localStorage.setItem("refreshToken", res.message.refreshToken);
                    // localStorage.setItem('token', res.data.access_token);
                      this.$router.push({path:'/'});
                  }
                })  
             
          },

          login: function () {
            const { username, password } = this
            myLoginRoutine({ username, password }).then(() => {
                this.$router.push('/')
            })
          }
        }
    }
</script>
