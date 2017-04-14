const INITIAL = { payload: [], error: false, fetching: false, success: false, message: null }

export default function Commits (state = INITIAL, action) {
  switch (action.type) {
    case 'FETCH_COMMITS_REQUEST':
      return Object.assign({}, INITIAL, { fetching: true })
    case 'FETCH_COMMITS_REQUEST_FAILED':
      return Object.assign({}, INITIAL, { error: true, message: action.message })
    case 'FETCH_COMMITS_REQUEST_SUCCEED':
      console.log(action.payload)
      return Object.assign({}, INITIAL, { success: true, payload: action.payload })
    default:
      return state
  }
}
