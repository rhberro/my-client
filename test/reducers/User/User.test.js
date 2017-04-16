import User from '../../../app/reducers/User'
import * as Actions from '../../../app/actions/User'

/* eslint-disable */
describe( 'user reducer', () => {
  it( 'should return the initial state', () => {
    const currentState = User( undefined, {} )
    const desiredState = { error: null, fetching: false, payload: [], success: false }
    expect( currentState ).toMatchObject( desiredState )
  } )

  it( 'should handle the action request', () => {
    const currentState = User( undefined, Actions.request() )
    const desiredState = { error: null, fetching: true, payload: [], success: false }
    expect( currentState ).toMatchObject( desiredState )
  } )

  it( 'should handle the action failed', () => {
    const currentState = User( undefined, Actions.failed( 'Error' ) )
    const desiredState = { error: 'Error', fetching: false, payload: [], success: false }
    expect( currentState ).toMatchObject( desiredState )
  } )

  it( 'should handle the action succeed', () => {
    const currentState = User( undefined, Actions.succeed( [] ) )
    const desiredState = { error: null, fetching: false, payload: [], success: true }
    expect( currentState ).toMatchObject( desiredState )
  } )
} )
/* eslint-enable */
