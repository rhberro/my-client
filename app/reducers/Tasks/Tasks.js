const INITIAL = {
  payload: [],
  error: false,
  fetching: false,
  success: false
}

export default function Tasks (state = INITIAL, action) {
  switch (action.type) {
    case 'TASKS':
      return [ ...INITIAL, fetching: true ]
    case 'TASKS_FAILURE':
      return [ ...INITIAL, error: true ]
    case 'TASKS_SUCCESS':
      return [ ...INITIAL, success: true, payload: action.payload ]
    default:
      return state
  }
}
