import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './Layout.scss'

const Layout = props => (
  <div className='layout'>
    <div className='layout__container'>
      <Header />{ props.children }
      <Footer />
    </div>
  </div>
)

export default Layout
