import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import Commits from './reducers/Commits'

export default createStore(
  combineReducers(
    {
      commits: Commits
    }
  ),
  applyMiddleware(
    thunkMiddleware
  )
)
