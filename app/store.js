import { createStore, combineReducers } from 'redux'

import Task from './reducers/Task'

export default createStore(
  combineReducers(
    {
      Task
    }
  )
)
