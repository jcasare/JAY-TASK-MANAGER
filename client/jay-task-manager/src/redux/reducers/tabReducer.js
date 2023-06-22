import * as actionTypes from '../actions/types'
const initialState = actionTypes.ALL_TASKS
export const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SWITCH_TAB:
      return action.selected
    default:
      return state
  }
}
