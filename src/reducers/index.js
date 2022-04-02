import { combineReducers } from 'redux'

import { userReducer } from './userReducer'

let allReducers = combineReducers({
  userReducer,
})

export default allReducers
