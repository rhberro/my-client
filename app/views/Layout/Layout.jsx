import React from 'react'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import './Layout.scss'

const Layout = props => (
  <div className='layout'>
    <Navbar />
    { props.children }
    <Footer />
  </div>
)

export default Layout
