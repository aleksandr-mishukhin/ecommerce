import { $authHost, $host } from './index'
import jwt_decode from 'jwt-decode'

export const getRoles = async() => {
    const {data} = await $host.get('api/user/roles');
    return data.roles;
}

export const getRole = async(id) => {
    const {data} = await $host.get(`api/user/roles/${id}`,);
    return data.role;
}

export const registration = async(firstName, lastName, patronymic, email, password, roleId) => {
    const {data} = await $host.post('api/user/registration', {firstName, lastName, patronymic, email, password, roleId})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async(email, password) => {
    const {data} = await $host.post('api/user/login', {email,password})
    localStorage.setItem('token', data.token)  
    return jwt_decode(data.token)
}

export const check = async() => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)    
    return jwt_decode(data.token)
}

export const cart = async(userId) => {
    const {data} = await $authHost.get('api/user/cart', {userId})
    return data
}

export const addToCart = async(productId) => {
    const {data} = await $authHost.post('api/user/cart', {productId})
    return data
}

export const removeFromCart = async(productId) => {
    const {data} = await $authHost.delete('api/user/cart', {data: {productId}})
    return data
}
