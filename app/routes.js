import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

// views.
import Layout from './views/Layout'
import Home from './views/Home'
import About from './views/About'

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route component={Layout}>
        <Route name='home' path='/' component={Home} />
        <Route name='about' path='/about' component={About} />
      </Route>
    </Router>
  )
}

export default Routes
