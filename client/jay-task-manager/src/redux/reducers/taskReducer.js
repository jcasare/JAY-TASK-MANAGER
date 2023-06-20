import * as actionTypes from '../actions/types'

const initialState = {
  tasks: [],
  loading: false,
  error: null,
}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TASKS_REQUEST:
    case actionTypes.CREATE_TASK_REQUEST:
    case actionTypes.UPDATE_TASK_REQUEST:
    case actionTypes.DELETE_TASK_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case actionTypes.FETCH_TASKS_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
        loading: false,
      }
    case actionTypes.CREATE_TASK_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
        loading: false,
      }
    case actionTypes.UPDATE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task._id === action.payload.id ? action.payload._id : task
        ),
        loading: false,
      }
    case actionTypes.DELETE_TASK_SUCCESS: {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload),
        loading: false,
      }
    }
    case actionTypes.FETCH_TASKS_FAILURE:
    case actionTypes.CREATE_TASK_FAILURE:
    case actionTypes.UPDATE_TASK_FAILURE:
    case actionTypes.DELETE_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export default taskReducer
