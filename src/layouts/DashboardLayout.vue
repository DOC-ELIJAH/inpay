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
                        this.user=response.message[0].merchant_info
                    }
                }).catch(err=>{
                    console.log(err)
                })
            }
        }
    }, 
    data: () => ({
        user:{
            merchant_id:"",
            fullname:"Badmous Dembele",
            business_name:"Badmous Dembele",
            phone:"2341234578979",
            email:"badmousdems@gmail.com",
            date_of_birth:"2021-08-01",
            full_address:"Harare street, zone 6 wuse Abuja",
            state:"Cross River",
            city:"Abuja",
            language:"yoruba",
            bvn_number:"1234566789456",
            nin_number:"0857683726475"
            },
        bank_info:{
            bank_name:"First City Monument Bank",
            accont_name:"Ndaisah Umar Rabi",
            account_type:"Savings"
        }
    }),
};
</script>