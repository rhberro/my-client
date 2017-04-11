export const commits = () => (
  {
    type: 'COMMITS'
  }
)

export const commitsFailure = () => (
  {
    type: 'COMMITS_FAILURE'
  }
)

export const commitsSuccess = payload => (
  {
    type: 'COMMITS_SUCCESS',
    payload
  }
)
