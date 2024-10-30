import axios from 'axios'
import { BASE_URL } from '../../../../api/api.js'

export const getTodos = async () => {
    const { data } = await axios.get(`${BASE_URL}/todos`)
    return data
}

export const removeTodoById = async (id) => {
    const { data } = await axios.delete(`${BASE_URL}/todos/${id}`)
    return data
}