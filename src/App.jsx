import React, { Component } from 'react'
import CalendarPicker from './calendar/CalendarPicker'
import CalendarInput from './calendar/CalendarInput'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '19990101'
    }
  }

  handleChange = date => {
    this.setState({
      date
    })
  }
  render() {
    return (
      <div>
        <CalendarPicker value={this.state.date} onChange={this.handleChange} />

        <CalendarInput value={this.state.date} onChange={this.handleChange} />
        <div style={{position: 'absolute', top: 100, left: 300}}>
        <CalendarInput value={this.state.date} onChange={this.handleChange} />
        </div>
        <p>xxxx</p>
      </div>
    )
  }
}

export default App
