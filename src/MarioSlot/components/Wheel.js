import PropTypes from 'prop-types'
import React from 'react'

const Wheel = ({ image }) => <img src={image} alt={image} />

Wheel.propTypes = {
  image: PropTypes.string.isRequired
}

export default Wheel
