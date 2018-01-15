import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import CalendarPicker from './CalendarPicker'

class Float extends Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
    this.el.style.display = 'none'
  }

  componentWillMount() {
    document.body.appendChild(this.el)

  }

  componentWillUnmount() {
    document.body.removeChild(this.el)
  }

  render() {
    const child = React.Children.only(this.props.children)
    const newChild = React.cloneElement(child, {...child.props, ...this.props})
    return ReactDOM.createPortal(this.el, newChild)
  }
}

export default DropDown;