import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk';

import Commits from './reducers/Commits'

export default createStore(
  combineReducers(
    {
      commits: Commits
    }
  ),
  applyMiddleware(
    thunk
  )
)
