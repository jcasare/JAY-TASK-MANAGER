import {
  configureStore,
  applyMiddleware,
  combineReducers,
} from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import taskReducer from './reducers/taskReducer'
const rootReducer = combineReducers({
  tasks: taskReducer,
})
const middleware = [thunk]
export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: composeWithDevTools(),
})
