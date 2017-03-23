import Tasks from '../../../app/reducers/Tasks'
import * as Actions from '../../../app/actions/Tasks'

/* eslint-disable */
describe( 'tasks reducer', () => {
  it( 'should return the initial state', () => {
    const currentState = Tasks( undefined, {} )
    const desiredState = { payload: [], error: false, fetching: false, success: false }
    expect( currentState ).toMatchObject( desiredState )
  } )

  it( 'should handle the action tasks', () => {
    const currentState = Tasks( undefined, Actions.tasks() )
    const desiredState = { payload: [], error: false, fetching: true, success: false }
    expect( currentState ).toMatchObject( desiredState )
  } )

  it( 'should handle the action tasks_failure', () => {
    const currentState = Tasks( undefined, Actions.tasksFailure() )
    const desiredState = { payload: [], error: true, fetching: false, success: false }
    expect( currentState ).toMatchObject( desiredState )
  } )

  it( 'should handle the action tasks_success', () => {
    const currentState = Tasks( undefined, Actions.tasksSuccess( [] ) )
    const desiredState = { payload: [], error: false, fetching: false, success: true }
    expect( currentState ).toMatchObject( desiredState )
  } )
} )
/* eslint-enable */
