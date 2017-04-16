import * as Actions from '../../../app/actions/User'

/* eslint-disable */
describe( 'user actions', () => {
  it( 'should return the user action', () => {
    const desiredAction = { type: 'FETCH_USER_REQUEST' }
    expect( Actions.request() ).toMatchObject( desiredAction )
  } )

  it( 'should return the commits failure action', () => {
    const desiredAction = { type: 'FETCH_USER_REQUEST_FAILED', error: 'Error' }
    expect( Actions.failed( 'Error' ) ).toMatchObject( desiredAction )
  } )

  it( 'should return the commits success action', () => {
    const desiredAction = { type: 'FETCH_USER_REQUEST_SUCCEED', payload: [] }
    expect( Actions.succeed( [] ) ).toMatchObject( desiredAction )
  } )
} )
/* eslint-enable */
