import axios from "axios";


var baseUrl=window.location.protocol+"//"+window.location.hostname+':5000/v1/'
baseUrl=baseUrl.replace('inpay', 'inpayapi');


export async function productCreate(data) {
    let result={};
    const response=await axios.post(`${baseUrl}/secured/products`, data)
    return response.data;
}

export async function productList() {
    let result = {};
    const response = await axios.get(`${baseUrl}/secured/products?page=0&limit=${id}`)
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