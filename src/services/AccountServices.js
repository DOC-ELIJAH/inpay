import axios from "axios";
var baseUrl=window.location.protocol+"//"+window.location.hostname+':5000/v1/'
//var baseUrl='http://inpay.interranetworks.com:5000/v1'
//baseUrl='inpay.interranetworks.com'
baseUrl=baseUrl.replace('inpay', 'inpayapi');
// if(!baseUrl.includes('localhost') || !baseUrl.includes('192.168.0.58')){
//  // console.log("not local")
//   baseUrl=baseUrl.replace('inpay', 'inpayapi');
// }

console.log(baseUrl)
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
