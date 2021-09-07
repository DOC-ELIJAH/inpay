<template>
    <div class="app">
        <div class="layout">          
           <header-component :user="user"/>
           <sidebar-component />
            <div class="page-container">
                
                <!-- Content Wrapper START -->
                <div class="main-content">
                  <router-view :user="user"></router-view>
                </div>
                <!-- Content Wrapper END -->
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import SidebarComponent from "../components/SidebarComponent.vue"
import { userProfile } from '../services/MerchantServices.js';
import { createAccount } from '../services/AccountServices.js';


export default 
 {
  components: { SidebarComponent, HeaderComponent }, 

    created () {
        this.fetchAuthenticatedUser()
    },

    methods: {
        fetchAuthenticatedUser(){
            let token=localStorage.getItem('token');
            if(!token){
                this.$router.push({path:'/auth/login'});
            }else{
               const result = userProfile()
                result.then(response=>{
                    if(response.statusCode==400 && this.$route.path != '/merchant-profile'){
                        this.$router.push({path:'/merchant-profile'});
                    }
                    if(response.statusCode==200){
                        this.user.business_name=response.message[0].merchant_info.business_name
                        this.user.full_address=response.message[0].merchant_info.full_address
                        this.user.date_of_birth=response.message[0].merchant_info.date_of_birth
                        this.user.city=response.message[0].merchant_info.city
                        this.user.nin_number=response.message[0].merchant_info.nin_number
                        this.user.bvn_number=response.message[0].merchant_info.bvn_number
                        this.user.bank_name=response.message[0].bank_info.bank_name
                        this.user.account_type=response.message[0].bank_info.account_type
                        this.user.account_name=response.message[0].merchant_info.fullname
                        this.user.account_number=response.message[0].bank_info.account_number
                        this.user.state=response.message[0].merchant_info.state
                        this.user.branch=response.message[0].merchant_info.branch
                        this.user.language=response.message[0].merchant_info.language
                        this.user.email=response.message[0].merchant_info.email
                        this.user.phone=response.message[0].merchant_info.phone
                        this.user.merchant_id=response.message[0].merchant_info.merchant_id
                        this.user.fullname=response.message[0].merchant_info.fullname
                    }
                }).catch(err=>{
                })
            }
        }
    }, 
    data: () => ({
        user:{
            business_name:"",
            full_address:"",
            date_of_birth:"",
            city:"",
            state:"",
            nin_number:"",
            bvn_number:"",
            bank_name:"",
            language:"",
            account_number:"",
            account_type:"",
            account_name:"",
            branch:"",
            merchant_id:"",
            fullname:"",
            email:"",
            phone:"",
            
        }
    }),
};
</script>