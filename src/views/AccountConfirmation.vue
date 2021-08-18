<template>
    <div class="d-flex justify-content-center">
         <div v-if="!errorMessage" class="spinner-border text-info"></div>
         <div v-if="errorMessage" class="alert alert-info">{{errorMessage}}</div>
    </div>
</template>

<script>
import {confirmAccount} from '../services/AccountServices'

export default {
   data: () => ({
          token:'',
            errorMessage:''
         }),
    created() {
        this.token=this.$route.params.token;
        const result=confirmAccount(this.token);
        result.then(res=>{
            if(res.statusCode!=201){
                this.errorMessage=res.message;
            }else{
                localStorage.setItem('confirmed', res.message)
                window.location.href='/auth/login'
            }
        }).catch(err=>{
            this.errorMessage=err;
        })
    },
    methods:{
        confirm(){
            
        }
        
    }
}

</script>