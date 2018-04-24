import { BrowserRouter } from 'react-router-dom'
import React from 'react'

import Layout from '../../views/Layout'
import Routes from '../../../routes'

function RouterProvider () {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  )
}

export default RouterProvider
