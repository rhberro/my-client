import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import User from './reducers/User'

export default createStore(
  combineReducers(
    {
      /**
       * Here you should define the store
       * properties and their reducers.
       */
      user: User
    }
  ),
  applyMiddleware(
    /**
     * Here you can apply any middlewares you
     * want to the store.
     */
    thunkMiddleware
  )
)
