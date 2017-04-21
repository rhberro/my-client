import React from 'react'

import './Layout.scss'

const Layout = props => (
  <div className='layout'>
    <div className='layout__container'>
      { props.children }
    </div>
  </div>
)

export default Layout
