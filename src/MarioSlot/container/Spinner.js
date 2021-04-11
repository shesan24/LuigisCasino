import PropTypes from 'prop-types'
import React from 'react'
import bowser from '../assets/bowser.png'
import flower from '../assets/flower.png'
import mario from '../assets/mario.png'
import mushroom from '../assets/mushroom.png'
import shell from '../assets/shell.png'
import star from '../assets/star.png'
import Wheel from '../components/Wheel'

class Spinner extends React.Component {
  static propTypes = {
    spin: PropTypes.bool.isRequired,
    onStop: PropTypes.func.isRequired
  }

  state = {
    spinning: false,
    wheels: [],
  }

  images = [mario, star, flower, mushroom, shell, bowser] 

  componentDidMount() {
    this.setState({
      wheels: [
        this.randomImage(),
        this.randomImage(),
        this.randomImage()
      ]}
    )
  }

  static getDerivedStateFromProps(props, state) {
    return { spinning: props.spin }
  }

  componentDidUpdate(prevProps, prevState) {
    const { spinning } = this.state

    if (spinning && (spinning !== prevState.spinning)) {
      this.tick()
    }

    if (!spinning && (spinning !== prevState.spinning)) {
      clearInterval(this.isSpinning)
      this.props.onStop(this.state.wheels)
    }
  }

  randomImage = () => this.images[Math.floor((Math.random() * this.images.length))]

  spin = () => this.setState({
    wheels: [
      this.randomImage(),
      this.randomImage(),
      this.randomImage()
    ]
  })

  tick = () => this.isSpinning = setInterval(this.spin, 50)

  render() {
    const { wheels } = this.state

    return (
      <React.Fragment>
        {wheels.map((wheel, id) => (<Wheel key={`${id}_${wheel}`} image={wheel} />))}
      </React.Fragment>
    )
  }
}

export default Spinner
