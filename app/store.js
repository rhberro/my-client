import { applyMiddleware, combineReducers, createStore } from 'redux'

import Commits from './reducers/Commits'

export default createStore(
  combineReducers(
    {
      commits: Commits
    }
  ),
  applyMiddleware(

  )
)
