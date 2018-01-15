import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import PropTypes, { number } from 'prop-types'
import uniqid from 'uniqid'

class Popup extends Component {
  static propTypes = {
    onClickOutside: PropTypes.func,
    x: PropTypes.number,
    y: PropTypes.number
  }

  static defaultProps = {
    onClickOutside: () => {},
    x: 0,
    y: 0
  }

  constructor(props) {
    super(props)
    this.popId = uniqid()
  }

  componentWillMount() {
    this.container = document.createElement('div')
    document.body.appendChild(this.container)
    document.documentElement.addEventListener('click', this.handleGlobalClick)
  }

  componentWillUnmount() {
    document.body.removeChild(this.container)
    document.documentElement.removeEventListener('click', this.handleGlobalClick)
  }

  handleGlobalClick = e => {
    if($(e.target).parents('#popup_'+this.popId).length === 0) {
      this.props.onClickOutside()
    }

  }

  render() {
    return ReactDOM.createPortal(
      <div className="popup" id={'popup_'+this.popId} style={{position: 'absolute', left: this.props.x, top: this.props.y}}>{this.props.children}</div>,
      this.container
    )
  }
}

export default Popup
