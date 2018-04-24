import PropTypes from 'prop-types'
import React from 'react'

import './Button.styl'

function Button (props) {
  return (
    <button className='button' onClick={props.onClick}>
      { props.children }
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
