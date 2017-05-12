import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Routes from './routes'
import Store from './store'

ReactDOM.render(
  <Provider store={Store}>
    <Routes />
  </Provider>,
  document.getElementById('application')
)

if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextRoutes = require('./routes').default

    ReactDOM.render(
      <Provider store={Store}>
        <NextRoutes />
      </Provider>,
      document.getElementById('root')
    )
  })
}
