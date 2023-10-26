import { $authHost, $host } from './index'

export const getProducts = async() => {
    const {data} = await $host.get('api/products');
    return data.products;
}

export const getProduct = async(id) => {
    const {data} = await $host.get(`api/products/${id}`);
    return data.product;
}

export const createProduct = async(form) => {
    const {data} = await $authHost.post('api/products', form, {headers: { "Content-Type": "multipart/form-data" }});
    return data.response
}