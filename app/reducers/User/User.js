const initial = {
  error: null,
  fetching: false,
  payload: null,
  success: false
}

export default function User (state = initial, action) {
  if (action.type === 'FETCH_USER_REQUEST') {
    return { ...initial, fetching: true }
  }
  if (action.type === 'FETCH_USER_REQUEST_FAILED') {
    return { ...initial, error: action.error }
  }
  if (action.type === 'FETCH_USER_REQUEST_SUCCEED') {
    return { ...initial, success: true, payload: action.payload }
  }
  return state
}
