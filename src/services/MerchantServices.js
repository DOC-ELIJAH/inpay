import axios from "axios";
import params from '../configs/params'
var baseUrl=params.baseUrl+'secured/';
baseUrl=baseUrl.replace('inpay', 'inpayapi');
export async function editProfile(data){
    const response=await axios.post(`${baseUrl}merchant/create`, data)
    return response.data;
}


export async function userProfile(){
    const response=await axios.get(`${baseUrl}merchant/get-merchant-profile`)
    return response.data;
}


