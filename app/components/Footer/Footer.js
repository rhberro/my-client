import React from 'react'

import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='footer__container footer__container--center'>
        <li className='footer__item'>
          <a className='footer__anchor' href='https://github.com/rhberro/the-react-client'>
            Github
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
