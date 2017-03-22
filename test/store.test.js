const store = require('../app/store').default

test( 'the state tree should match', () => {
  const currentStates = store.getState()
  const desiredStates = { tasks : {} }

  expect( currentStates ).toMatchObject( desiredStates )
} )

test( 'the state tasks should match', () => {
  const currentState = store.getState().tasks
  const desiredStates = { payload: [], fetching: false, success: false, error: false }

  expect( currentState ).toMatchObject( desiredStates )
} )
