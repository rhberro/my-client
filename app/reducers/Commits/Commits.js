const INITIAL = { payload: [], error: false, fetching: false, success: false }

export default function Commits (state = INITIAL, action) {
  switch (action.type) {
    case 'COMMITS':
      return Object.assign({}, INITIAL, { fetching: true })
    case 'COMMITS_FAILURE':
      return Object.assign({}, INITIAL, { error: true })
    case 'COMMITS_SUCCESS':
      return Object.assign({}, INITIAL, { success: true, payload: action.payload })
    default:
      return state
  }
}
