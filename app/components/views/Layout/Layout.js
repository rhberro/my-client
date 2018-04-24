import React from 'react'

import './Layout.styl'

function Layout (props) {
  return (
    <div className='layout'>
      <div className='layout__container'>
        { props.children }
      </div>
    </div>
  )
}

export default Layout
