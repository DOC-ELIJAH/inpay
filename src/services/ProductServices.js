import axios from "axios";
import params from '../configs/params'
var baseUrl=params.baseUrl+'secured/';
//baseUrl=baseUrl.replace('inpay', 'inpayapi');

export async function productCreate(data) {
    
    const response=await axios.post(`${baseUrl}products`, data)
    return response.data;
}

export async function productList() {
    const response = await axios.get(`${baseUrl}/products?page=0&limit=${id}`)
    return response
}

export async function productItem() {
    let result = {};
    const response = await axios.get(`${baseUrl}/secured/products/${id}`)
}

export async function productUpdate(data) {
    let result = {};
    const response = await axios.patch(`${baseUrl}/secured/products/${id}`, data)
}

export async function productDelete() {
    let result = {};
    const response = await axios.del(`${baseUrl}/secured/products/${id}`)
}