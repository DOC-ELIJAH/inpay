import axios from "axios";
const baseUrl=window.location.protocol+"//"+window.location.hostname+':5000/v1/secured/';


export async function editProfile(data){
    const response=await axios.post(`${baseUrl}merchant/create`, data);
    return response.data;
}


export async function userProfile(){
    const response=await axios.get(`${baseUrl}merchant/get-merchant-profile`)
    return response.data;
}

export async function userState(data){
    const response=await axios.get(`${baseUrl}account/get-states`, data)
    return response.data;
}


export async function userBanks(data){
    const response=await axios.get(`${baseUrl}account/get-banks`, data)
    return response.data;
}

