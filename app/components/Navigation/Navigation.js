import React from 'react'
import { Link } from 'react-router'

import './Navigation.scss'

const Navigation = () => {
  return (
    <nav>
      <ul className='nav nav--left'>
        <li className='nav__item'>
          <Link to='/' className='nav__anchor' activeClassName='nav__anchor--active'>Home</Link>
        </li>

        <li className='nav__item'>
          <Link to='about' className='nav__anchor' activeClassName='nav__anchor--active'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
