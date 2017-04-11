import Commits from '../../../app/reducers/Commits'
import * as Actions from '../../../app/actions/Commits'

/* eslint-disable */
describe( 'commits reducer', () => {
  it( 'should return the initial state', () => {
    const currentState = Commits( undefined, {} )
    const desiredState = { payload: [], error: false, fetching: false, success: false }
    expect( currentState ).toMatchObject( desiredState )
  } )

  it( 'should handle the action commits', () => {
    const currentState = Commits( undefined, Actions.commits() )
    const desiredState = { payload: [], error: false, fetching: true, success: false }
    expect( currentState ).toMatchObject( desiredState )
  } )

  it( 'should handle the action commits_failure', () => {
    const currentState = Commits( undefined, Actions.commitsFailure() )
    const desiredState = { payload: [], error: true, fetching: false, success: false }
    expect( currentState ).toMatchObject( desiredState )
  } )

  it( 'should handle the action commits_success', () => {
    const currentState = Commits( undefined, Actions.commitsSuccess( [] ) )
    const desiredState = { payload: [], error: false, fetching: false, success: true }
    expect( currentState ).toMatchObject( desiredState )
  } )
} )
/* eslint-enable */
