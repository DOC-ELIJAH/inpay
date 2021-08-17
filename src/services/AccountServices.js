import axios from "axios";
const baseUrl=window.location.protocol+"//"+window.location.hostname+':5000/v1/';


export async function createAccount(data){
    let result={};
    const response=await axios.post(`${baseUrl}account/create-merchant`, data)
    return response.data;
}

export async function confirm(){
    const response=await axios.get();

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
