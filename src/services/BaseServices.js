import axios from "axios";
import createAccount from './AccountServices';
var baseUrl=window.location.protocol+"//"+window.location.hostname+':5000/v1/'
//baseUrl='inpay.interranetworks.com'
baseUrl=baseUrl.replace('inpay', 'inpayapi');
// if(!baseUrl.includes('localhost') || !baseUrl.includes('192.168.0.58')){
//     // console.log("not local")
//      baseUrl=baseUrl.replace('inpay', 'inpayapi');
// }
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
