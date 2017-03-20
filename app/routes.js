import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './views/Layout'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'

const Routes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
      <Route path='contact' component={Contact} />
    </Route>
  </Router>
)

export default Routes
