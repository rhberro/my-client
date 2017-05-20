import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import User from './reducers/User'

export default createStore(
  combineReducers(
    {
      user: User
    }
  ),
  applyMiddleware(
    thunkMiddleware
  )
)
