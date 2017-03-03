import React from 'react'
import { Link } from 'react-router'

import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul className='nav__container nav__container--left'>
        <li className='nav__item'>
          <Link to='/' className='nav__anchor' activeClassName='nav__anchor--active'>
            Home
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
}

export default Navbar
