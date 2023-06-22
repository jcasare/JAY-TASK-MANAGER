import * as apiRequests from '../apiRequests'
import * as actionTypes from './types'

export const fetchTasks = () => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_TASKS_REQUEST })
    try {
      const tasks = await apiRequests.fetchTasks()
      await dispatch({
        type: actionTypes.FETCH_TASKS_SUCCESS,
        payload: tasks,
      })
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_TASKS_FAILURE,
        payload: error.message,
      })
    }
  }
}

export const createTask = (task) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.CREATE_TASK_REQUEST })
    try {
      const tasks = await apiRequests.createTask(task)
      dispatch({
        type: actionTypes.CREATE_TASK_SUCCESS,
        payload: tasks,
      })
    } catch (error) {
      dispatch({
        type: actionTypes.CREATE_TASK_FAILURE,
        payload: error.message,
      })
    }
  }
}

export const toggleTask = (taskID) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.TOGGLE_TASK_REQUEST })
    try {
      const toggledTask = await apiRequests.toggleTask(taskID)
      dispatch({ type: actionTypes.TOGGLE_TASK_SUCCESS, payload: toggledTask })
    } catch (error) {
      dispatch({
        type: actionTypes.TOGGLE_TASK_FAILURE,
        payload: error.message,
      })
    }
  }
}

export const updateTask = (taskID, editedTask) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_TASK_REQUEST })
    try {
      const updatedTask = await apiRequests.updateTask(taskID, editedTask)
      dispatch({ type: actionTypes.UPDATE_TASK_SUCCESS, payload: updatedTask })
    } catch (error) {
      dispatch({
        type: actionTypes.UPDATE_TASK_FAILURE,
        payload: error.message,
      })
    }
  }
}
export const deleteTask = (taskID) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_TASK_REQUEST })
    try {
      const deletedTask = await apiRequests.deleteTask(taskID)
      dispatch({ type: actionTypes.DELETE_TASK_SUCCESS, payload: taskID })
    } catch (error) {
      dispatch({
        type: actionTypes.DELETE_TASK_FAILURE,
        payload: error.message,
      })
    }
  }
}
export const switchTabs = (tab) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.SWITCH_TAB, selected: tab })
  }
}
