import * as Actions from './User'

describe( 'app/actions/User/User.js', function () {
  it( 'should return the user request action', function () {
    const desiredAction = { type: 'FETCH_USER_REQUEST' }
    expect( Actions.request() ).toMatchObject( desiredAction )
  } )

  it( 'should return the user request failed action', function () {
    const desiredAction = { type: 'FETCH_USER_REQUEST_FAILED', error: 'Error' }
    expect( Actions.failed( 'Error' ) ).toMatchObject( desiredAction )
  } )

  it( 'should return the user request succeed action', function () {
    const desiredAction = { type: 'FETCH_USER_REQUEST_SUCCEED', payload: [] }
    expect( Actions.succeed( [] ) ).toMatchObject( desiredAction )
  } )
} )
