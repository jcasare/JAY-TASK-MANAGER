import axios from 'axios'

const API_BASE_URL = 'https://taskquake-api.onrender.com/api/v1'

export const fetchTasks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tasks`)

    return response.data
  } catch (error) {
    throw error.response.data
  }
}
export const createTask = async (task) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/tasks`, task)
    return response.data
  } catch (error) {
    throw error.response.data
  }
}

export const toggleTask = async (task) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tasks/${task._id}`)
    // console.log(response.data)
    return response.data
  } catch (error) {
    throw error.response.data
  }
}
export const updateTask = async (taskID, editedTask) => {
  try {
    const response = await axios.patch(
      `${API_BASE_URL}/tasks/${taskID}`,
      editedTask
    )
    return response.data
  } catch (error) {
    throw error.response.data
  }
}

export const deleteTask = async (taskID) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/tasks/${taskID}`)
    return response.data
  } catch (error) {
    throw error.response.data
  }
}
