import React from 'react'
import { IndexLink, Link } from 'react-router'

import './Navbar.scss'

const Navbar = () => (
  <nav className='nav'>
    <ul className='nav__container nav__container--left'>
      <li className='nav__item'>
        <IndexLink to='/' className='nav__anchor' activeClassName='nav__anchor--active'>
          Home
        </IndexLink>
      </li>
      <li className='nav__item'>
        <Link to='contact' className='nav__anchor' activeClassName='nav__anchor--active'>
          Contact
        </Link>
      </li>
      <li className='nav__item'>
        <Link to='about' className='nav__anchor' activeClassName='nav__anchor--active'>
          About
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navbar
