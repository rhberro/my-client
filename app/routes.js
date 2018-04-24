import { Route, Switch } from 'react-router-dom'
import React from 'react'

import About from './components/views/About'
import Home from './components/views/Home'
import NotFound from './components/views/NotFound'

function Routes () {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes
