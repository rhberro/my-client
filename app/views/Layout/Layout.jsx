import React from 'react'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import './Layout.scss'

const Layout = props => (
  <div className='layout'>
    <div className='layout__container'>
      <Navbar />{ props.children }
      <Footer />
    </div>
  </div>
)

export default Layout
