import axios from 'axios'

const BASE_URL = 'http://localhost:4000/api/tasks'

export const getAllTasks = () => axios.get(BASE_URL)

export const addTask = (task) => axios.post(BASE_URL, task)

export const updateTask = (id, task) => axios.put(`${BASE_URL}/${id}`, task)

export const deleteTask = (id) => axios.delete(`${BASE_URL}/${id}`)

export const toggleTask = (id) => axios.patch(`${BASE_URL}/${id}/toggle`)
