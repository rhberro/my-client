import React from 'react'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import './Layout.scss'

const Layout = props => {
  const { children } = props

  return (
    <div className='layout'>
      <Navbar />
      { children }
      <Footer />
    </div>
  )
}

export default Layout
