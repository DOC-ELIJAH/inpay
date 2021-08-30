import axios from "axios";
import createAccount from './AccountServices';
const baseUrl=window.location.protocol+"//"+window.location.hostname+':5000/v1/secured/';


export async function editProfile(data){
    let result={};
    const response=await axios.post(`${baseUrl}merchant/create`, data)
    console.log(response)
    return response.data;
}


export async function userProfile(){
    let result={};
    const response=await axios.get(`${baseUrl}merchant/get-merchant-profile`)
    console.log(response);
    return response.data;
}

export async function userState(data){
    let result={};
    const response=await axios.get(`${baseUrl}account/get-states`, data)
    return response.data;
}


export async function userBanks(data){
    let result={};
    const response=await axios.get(`${baseUrl}account/get-banks`, data)
    return response.data;
}

export default {
    created(){
        this.$merchantMixin_fetchUser(this.$route.params.firstName)

        const token = localStorage.getItem('user-token')

        if(token) {
            this.$merchantMixin_fetchAuthenticatedUser(token)
        }
    },
    methods: {
        $_merchantMixin_fetchUser(firstName){
            let username = createAccount()
            if(firstName){
                username.then(response=>{
                    this.user = response.data.data
                })
            }else{
                const token = localStorage.getItem('user-token')
                userProfile(),{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }.then(response=>{
                    this.user = response.data.data
                })
            }
        },
        $merchantMixin_fetchAuthenticatedUser(token){
            userProfile(),{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }.then(response=>{
                this.authUser = response.data.data
            })
        }
    }
}