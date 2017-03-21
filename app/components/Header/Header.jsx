import React from 'react'
import { IndexLink } from 'react-router'

import './Header.scss'

const Header = () => (
  <nav className='header'>
    <ul className='header__container'>
      <li>
        <IndexLink to='/' className='header__anchor' activeClassName='header__anchor--active'>
          Home
        </IndexLink>
      </li>
    </ul>
  </nav>
)

export default Header
