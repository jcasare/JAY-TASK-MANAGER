import * as apiRequests from '../apiRequests'
import * as actionTypes from './types'

export const fetchTasks = () => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_TASKS_REQUEST })
    try {
      const tasks = await apiRequests.fetchTasks()
      dispatch({
        type: actionTypes.FETCH_TASKS_SUCCESS,
        payload: tasks,
      })
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_TASKS_FAILURE,
        payload: error,
      })
    }
  }
}

export const createTask = (task) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.CREATE_TASK_REQUEST })
    try {
      const newTask = await apiRequests.createTask(task)
      dispatch({
        type: actionTypes.CREATE_TASK_SUCCESS,
        payload: newTask,
      })
    } catch (error) {
      dispatch({
        type: actionTypes.CREATE_TASK_FAILURE,
        payload: error,
      })
    }
  }
}

export const updateTask = (task) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_TASK_REQUEST })
    try {
      const updatedTask = await apiRequests.updateTask(task)
      dispatch({
        type: actionTypes.UPDATE_TASK_SUCCESS,
        payload: updatedTask,
      })
    } catch (error) {
      dispatch({
        type: actionTypes.UPDATE_TASK_FAILURE,
        payload: error,
      })
    }
  }
}

export const deleteTask = (taskID) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_TASK_REQUEST })
    try {
      await apiRequests.deleteTask(taskID)
      dispatch({
        type: actionTypes.CREATE_TASK_SUCCESS,
        payload: taskID,
      })
    } catch (error) {
      dispatch({
        type: actionTypes.DELETE_TASK_FAILURE,
        payload: error,
      })
    }
  }
}
