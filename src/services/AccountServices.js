import axios from "axios";
import params from '../configs/params'
var baseUrl=params.baseUrl;
baseUrl=baseUrl.replace('inpay', 'inpayapi');

export async function createAccount(data){
    let result={};
    const response=await axios.post(`${baseUrl}account/create-merchant`, data)
    return response.data;
}

export async function confirmAccount(token){
    const response=await axios.get(`${baseUrl}account/verify/${token}`);
    return response.data;
}

export async function userLogin(data){
    let result={};
    const response=await axios.post(`${baseUrl}account/login`, data)
    console.log(response)
    return response.data;
}

export async function userOtp(data){
    let result={};
    const response=await axios.post(`${baseUrl}account/confirm_otp`, data)
    return response.data;
}
