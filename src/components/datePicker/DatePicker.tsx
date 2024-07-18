import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date())

  return <DatePicker onChange={date => setStartDate(date)} selected={startDate} />
}
