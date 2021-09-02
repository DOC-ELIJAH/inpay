import axios from "axios";
import createAccount from './AccountServices';
const baseUrl=window.location.protocol+"//"+window.location.hostname+':5000/v1/';

export async function getBanks(){
    let result={};
    const response=await axios.get(`${baseUrl}merchant/get-banks`)
    return response.data;
}

export async function getStates(){
    let result={};
    const response=await axios.get(`${baseUrl}merchant/get-states`)
    return response.data;
}
