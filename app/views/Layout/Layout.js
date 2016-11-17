import React from 'react'

import Navigation from '../../components/Navigation'

import './Layout.scss'

const Layout = props => {
  const { children } = props

  return (
    <div>
      <Navigation />

      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
