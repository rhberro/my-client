import React from 'react'
import ReactDOM from 'react-dom'

import RouterProvider from './components/provider/RouterProvider'
import StoreProvider from './components/provider/StoreProvider'

ReactDOM.render(
  <StoreProvider>
    <RouterProvider />
  </StoreProvider>,
  document.getElementById('application')
)
