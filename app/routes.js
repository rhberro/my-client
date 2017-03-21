import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

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
