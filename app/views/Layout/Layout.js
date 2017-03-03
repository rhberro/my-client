import React from 'react'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import './Layout.scss'

const Layout = props => {
  const { children } = props

  return (
    <div className='layout'>
      <div className='layout__container'>
        <div className='layout__row'>
          <div className='layout__column'>
            <Navbar />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
