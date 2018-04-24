import store from './store'

describe( 'app/store.js', function () {
  describe( 'the state tree', function () {
    it( 'should match', function () {
      const currentStateTree = store.getState()
      const desiredStateTree = { user : {} }
      expect( currentStateTree ).toMatchObject( desiredStateTree )
    } )
  } )

  describe( 'the state user', function () {
    it( 'should match', function () {
      const currentState = store.getState().user
      const desiredState = { payload: null, fetching: false, success: false, error: null }
      expect( currentState ).toMatchObject( desiredState )
    } )
  } )
} )
