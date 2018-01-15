import React, { Component } from 'react'
import DatePickerHeader from './DatePickerHeader'
import DatePickerBody from './DatePickerBody'
import moment from 'moment'
import PropTypes from 'prop-types'

class DatePicker extends Component {
  static propTypes = {
    date: PropTypes.object, // moment object
    start: PropTypes.object, // moment object
    onShowPicker: PropTypes.func,
    onChange: PropTypes.func,
    onAdjustMonth: PropTypes.func
  }
  constructor(props) {
    super(props)
  }

  handleAdjustMonth = adjust => {
    this.props.onAdjustMonth(adjust)
  }

  handleSelectDate = date => {
    this.props.onChange(date)
  }

  handleShowPicker = (e, type) => {
    e.preventDefault()
    this.props.onShowPicker(type)
  }

  render() {
    // const { selected } = this.state
    const { start, date } = this.props
    return (

        <div className="datepicker-days" style={{ display: 'block' }}>
          <table className="table-condensed">
            <DatePickerHeader
              start={start}
              onForward={() => this.handleAdjustMonth(1)}
              onBackward={() => this.handleAdjustMonth(-1)}
              onShowMonthPicker={e => this.handleShowPicker(e, 'month')}
              onShowYearPicker={e => this.handleShowPicker(e, 'year')}
            />
            <DatePickerBody
              onSelectDate={this.handleSelectDate}
              start={start}
              selected={date}
            />
          </table>
        </div>

    )
  }
}

export default DatePicker
