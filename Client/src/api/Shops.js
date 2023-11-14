import axios from './Axios'

export const createShopRequest = async (shop) => axios.post(`/shops`, shop)

export const getShopsRequest = async () => axios.get(`/shops`)

export const getShopRequest = async (id) => axios.get(`/shops/${id}`)

export const updateShopsRequest = async (id, shop) => axios.put(`/shops/${id}`, shop)

export const deleteShopsRequest = async (id) => axios.delete(`/shops/${id}`)
