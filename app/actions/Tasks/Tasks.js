export const tasks = () => (
  {
    type: 'TASKS'
  }
)

export const tasksFailure = () => (
  {
    type: 'TASKS_FAILURE'
  }
)

export const tasksSuccess = (payload) => (
  {
    type: 'TASKS_SUCCESS',
    payload
  }
)
