import axios from "axios";
import myLoginRoutine from '../services/AccountServices';
const baseUrl=window.location.protocol+"//"+window.location.hostname+':5000/v1/';


export async function editProfile(data){
    let result={};
    const response=await axios.post(`${baseUrl}merchant/create`, data)
    console.log(response)
    return response.data;
}


export async function userProfile(daTa){
    let result={};
    const response=await axios.get(`${baseUrl}merchant/get-merchant-by-id-phone/:type/:value`)
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

//const MerchantRoutine = user => new Promise ((resolve, reject) => {
    //axios({url: 'initial', data:})
//})