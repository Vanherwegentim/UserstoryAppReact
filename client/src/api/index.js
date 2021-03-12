import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertUserstory = payload => api.post(`/userstory`, payload)
export const getAllUserstories = () => api.get(`/userstories`)
export const updateUserstoryById = (id, payload) => api.put(`/userstory/${id}`, payload)
export const deleteUserstoryById = id => api.delete(`/userstory/${id}`)
export const getUserstoryById = id => api.get(`/userstory/${id}`)

const apis = {
    insertUserstory,
    getAllUserstories,
    updateUserstoryById,
    deleteUserstoryById,
    getUserstoryById,
}

export default apis