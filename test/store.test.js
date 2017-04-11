import store from '../app/store'

/* eslint-disable */
describe( 'the state tree', () => {
  it( 'should match', () => {
    const currentStates = store.getState()
    const desiredStates = { commits : {} }
    expect( currentStates ).toMatchObject( desiredStates )
  } )
} )

describe( 'the state commits', () => {
  it( 'should match', () => {
    const currentState = store.getState().commits
    const desiredState = { payload: [], fetching: false, success: false, error: false }
    expect( currentState ).toMatchObject( desiredState )
  } )
} )
/* eslint-enable */
