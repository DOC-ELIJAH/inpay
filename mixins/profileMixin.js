import axios from 'axios'
import { userProfile, editProfile,  } from '../services/MerchantProfile';


export default{
    created() {
        this.$_profileMixin_fetchUser(this.$route.params.username)

        const token = localStorage.getItem('token')

        if(token){
            this.$_profileMixin_fetchAuthenticatedUser(token)
        }

    },
    methods: {
        $_profileMixin_fetchUser(username){
            if(username){
                userProfile(`/${username}`).then(response=>{
                    this.user = response.data.data 
                })
            }else{
                const token = localStorage.getItem('token')

                userProfile().then(response=>{
                    this.user = reponse.data.data
                })
            }
        }
    },
    $_profileMixin_fetchAuthenticatedUser(token){
        userProfile().then(response=>{
            this.authUser = response.data.data
        })
    }
}