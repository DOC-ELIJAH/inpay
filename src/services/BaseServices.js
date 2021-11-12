import axios from "axios";
import params from '../configs/params'
var baseUrl=params.baseUrl;
baseUrl=baseUrl.replace('inpay', 'inpayapi');
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
