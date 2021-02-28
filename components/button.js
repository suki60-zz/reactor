import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Button = ({ color }) => {
  const [state, setState] = useState(false)

  return (
    <button
      type="button"
      onClick={(() => setState(!state))}
      style={{ color: state ? 'black' : color }}
    >
      click me
    </button>
  )
}

Button.propTypes = {
  color: PropTypes.string,
}

export default Button
