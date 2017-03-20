import { createStore, combineReducers } from 'redux'

import Tasks from './reducers/Tasks'

export default createStore(
  combineReducers(
    {
      tasks: Tasks
    }
  )
)
