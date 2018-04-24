import * as Actions from '../../actions/User'
import User from './User'

describe( 'user reducer', function () {
  it( 'should return the initial state', function () {
    const currentState = User( undefined, {} )
    const desiredState = { error: null, fetching: false, payload: null, success: false }
    expect( currentState ).toMatchObject( desiredState )
  } )

  it( 'should handle the action request', function () {
    const currentState = User( undefined, Actions.request() )
    const desiredState = { error: null, fetching: true, payload: null, success: false }
    expect( currentState ).toMatchObject( desiredState )
  } )

  it( 'should handle the action failed', function () {
    const currentState = User( undefined, Actions.failed( 'Error' ) )
    const desiredState = { error: 'Error', fetching: false, payload: null, success: false }
    expect( currentState ).toMatchObject( desiredState )
  } )

  it( 'should handle the action succeed', function () {
    const currentState = User( undefined, Actions.succeed( [] ) )
    const desiredState = { error: null, fetching: false, payload: [], success: true }
    expect( currentState ).toMatchObject( desiredState )
  } )
} )
