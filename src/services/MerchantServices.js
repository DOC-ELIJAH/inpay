import axios from "axios";
import createAccount from './AccountServices';
//this baseurl will be refactor to the mainjs as a global varible
var baseUrl=window.location.protocol+"//"+window.location.hostname+':5000/v1/'
//baseUrl='inpay.interranetworks.com'
baseUrl=baseUrl.replace('inpay', 'inpayapi');
// if(!baseUrl.includes('localhost') || !baseUrl.includes('192.168.0.58')){
//     // console.log("not local")
//      baseUrl=baseUrl.replace('inpay', 'inpayapi');
//  }
//console.log(baseUrl)

export async function editProfile(data){
    let result={};
    const response=await axios.post(`${baseUrl}merchant/create`, data)
   // console.log(response)
    return response.data;
}


export async function userProfile(){
    let result={};
    const response=await axios.get(`${baseUrl}merchant/get-merchant-profile`)
    //console.log(response);
    return response.data;
}


