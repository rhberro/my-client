import * as Actions from '../../../app/actions/Tasks'

/* eslint-disable */
describe( 'tasks actions', () => {
  it( 'should return the tasks action', () => {
    const desiredAction = { type: 'TASKS' }
    expect( Actions.tasks() ).toMatchObject( desiredAction )
  } )

  it( 'should return the tasks failure action', () => {
    const desiredAction = { type: 'TASKS_FAILURE' }
    expect( Actions.tasksFailure() ).toMatchObject( desiredAction )
  } )

  it( 'should return the tasks success action', () => {
    const desiredAction = { type: 'TASKS_SUCCESS', payload: [] }
    expect( Actions.tasksSuccess( [] ) ).toMatchObject( desiredAction )
  } )
} )
/* eslint-enable */
