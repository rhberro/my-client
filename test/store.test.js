import store from '../app/store'

/* eslint-disable */
describe( 'the state tree', () => {
  it( 'should match', () => {
    const currentStates = store.getState()
    const desiredStates = { user : {} }
    expect( currentStates ).toMatchObject( desiredStates )
  } )
} )

describe( 'the state user', () => {
  it( 'should match', () => {
    const currentState = store.getState().user
    const desiredState = { payload: [], fetching: false, success: false, error: null }
    expect( currentState ).toMatchObject( desiredState )
  } )
} )
/* eslint-enable */
