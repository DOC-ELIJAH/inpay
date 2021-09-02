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


export default 
 {
  components: { SidebarComponent, HeaderComponent }, 

    created () {
         this.fetchAuthenticatedUser();
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
                        this.user.language=response.message[0].merchant_info.language
                        this.user.email=response.message[0].merchant_info.email
                        this.user.phone=response.message[0].merchant_info.phone
                        this.user.merchant_id=response.message[0].merchant_info.merchant_id
                        this.user.nin_number=response.message[0].merchant_info.nin_number
                        this.user.bvn_number=response.message[0].merchant_info.bvn_number
                        this.user.fullname=response.message[0].merchant_info.fullname
                    }
                }).catch(err=>{
                   // console.log(err)
                })
            }
           // console.log(this.user)
        }
    }, 
    data: () => ({
        user:{
            business_name:"",
            full_address:"",
            date_of_birth:"",
            city:"",
            language:"",
            bvn_number:"",
            nin_number:"",
            merchant_id:"",
            fullname:"",
            email:"",
            phone:"",
        }
    }),
};
</script>