export default function Task (state = [], action) {
  switch (action.type) {
    case 'ADD_TASK':
      return [ ...state, action.payload ]
    default:
      return state
  }
}
