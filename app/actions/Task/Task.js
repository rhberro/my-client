export function addTask (title, description) {
  return {
    type: 'ADD_TASK',
    payload: {
      title,
      description
    }
  }
}
