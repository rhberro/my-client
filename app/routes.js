import React from 'react'
import { browserHistory, IndexRoute, Router, Route } from 'react-router'

import Layout from './views/Layout'
import Home from './views/Home'

const Routes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
)

export default Routes
