export const request = () => (
  {
    type: 'FETCH_USER_REQUEST'
  }
)

export const failed = error => (
  {
    type: 'FETCH_USER_REQUEST_FAILED',
    error
  }
)

export const succeed = payload => (
  {
    type: 'FETCH_USER_REQUEST_SUCCEED',
    payload
  }
)

export function getUser () {
  return dispatch => {
    dispatch(request())

    window.fetch('https://api.github.com/users/rhberro')
      .then(data => data.json())
      .then(data => dispatch(succeed(data)))
      .catch(error => dispatch(failed(error)))
  }
}
