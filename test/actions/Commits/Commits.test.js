import * as Actions from '../../../app/actions/Commits'

/* eslint-disable */
describe( 'commits actions', () => {
  it( 'should return the commits action', () => {
    const desiredAction = { type: 'COMMITS' }
    expect( Actions.commits() ).toMatchObject( desiredAction )
  } )

  it( 'should return the commits failure action', () => {
    const desiredAction = { type: 'COMMITS_FAILURE' }
    expect( Actions.commitsFailure() ).toMatchObject( desiredAction )
  } )

  it( 'should return the commits success action', () => {
    const desiredAction = { type: 'COMMITS_SUCCESS', payload: [] }
    expect( Actions.commitsSuccess( [] ) ).toMatchObject( desiredAction )
  } )
} )
/* eslint-enable */
