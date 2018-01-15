import React, { Component } from 'react'
import moment from 'moment'
import { getMoment } from './utils'
import CalendarPicker from './CalendarPicker'
import Popup from './Popup'
import $ from 'jquery'

class CalendarInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showCalendar: false,
      x: undefined,
      y: undefined
    }
  }

  handleClick = () => {
    let {top, left} = $(this.input).offset()
    console.log(top, left)
    top += $(this.input).height()
    console.log($(this.input).height())

    this.setState({ showCalendar: true, x: left, y: top })
  }

  render() {
    const { value } = this.props
    const displayValue =
      getMoment(value) && getMoment(value).format('YYYY-MM-DD')
    const {x, y} = this.state
    return (
      <div className="input-group" style={{ width: 240 }} ref={el => this.input = el}>
        <input
          type="text"
          className="form-control"
          aria-label="..."
          readOnly={true}
          value={displayValue}

        />
        <div className="input-group-btn" ref={el => this.button = el}>
          <button
            type="button"
            className="btn btn-default dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={this.handleClick}

          >
            <span className="glyphicon glyphicon-calendar" aria-hidden="true" />{' '}
            <span className="caret" />
          </button>
        </div>
        {this.state.showCalendar ? (
          <Popup x={x} y={y} onClickOutside={() => this.setState({ showCalendar: false })}>
            <CalendarPicker {...this.props}/>
          </Popup>
        ) : null}
      </div>
    )
  }
}

export default CalendarInput
