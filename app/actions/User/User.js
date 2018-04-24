export const request = function () {
  return { type: 'FETCH_USER_REQUEST' }
}

export const succeed = function (payload) {
  return { type: 'FETCH_USER_REQUEST_SUCCEED', payload }
}

export const failed = function (error) {
  return { type: 'FETCH_USER_REQUEST_FAILED', error }
}

export function getUser () {
  return dispatch => {
    dispatch(request())

    window.fetch('https://api.github.com/users/rhberro')
      .then(data => data.json())
      .then(data => dispatch(succeed(data)))
      .catch(error => dispatch(failed(error)))
  }
}
