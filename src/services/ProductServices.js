import axios from "axios";
import params from '../configs/params'
var baseUrl=params.baseUrl+'secured/';
//baseUrl=baseUrl.replace('inpay', 'inpayapi');

export async function productCreate(data) {
    
    const response=await axios.post(`${baseUrl}products`, data)
    return response.data;
}

export async function productList() {
    const response = await axios.get(`${baseUrl}products?page=0&limit=10`)
    return response
}

export async function productItem(id) {
    let result = {};
    const response = await axios.get(`${baseUrl}products/${id}`)
}

export async function productUpdate(data) {
    let result = {};
    const response = await axios.patch(`${baseUrl}products/${id}`, data)
}

export async function productDelete() {
    let result = {};
    const response = await axios.del(`${baseUrl}products/${id}`)
}