import PropTypes from 'prop-types'
import React from 'react'
import '../css/Wheel.css'

const Wheel = ({ image }) => <img id="wheel" src={image} alt={image} />

Wheel.propTypes = {
  image: PropTypes.string.isRequired
}

export default Wheel
