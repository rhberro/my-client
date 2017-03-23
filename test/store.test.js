import store from '../app/store'

/* eslint-disable */
describe( 'the state tree', () => {
  it( 'should match', () => {
    const currentStates = store.getState()
    const desiredStates = { tasks : {} }
    expect( currentStates ).toMatchObject( desiredStates )
  } )
} )

describe( 'the state tasks', () => {
  it( 'should match', () => {
    const currentState = store.getState().tasks
    const desiredStates = { payload: [], fetching: false, success: false, error: false }
    expect( currentState ).toMatchObject( desiredStates )
  } )
} )
/* eslint-enable */
