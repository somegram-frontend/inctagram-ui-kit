import React, { type ComponentPropsWithoutRef } from 'react'
import DatePicker from 'react-datepicker'

import clsx from 'clsx'

import 'react-datepicker/dist/react-datepicker.css'

import s from './datePicker.module.scss'

type DatePickerProps = {
  className?: string
  endDate?: Date
  setEndDate?: (date: Date | null) => void
  setStartDate?: (date: Date | null) => void
  startDate?: Date
}

export const DatePickerComponent = (props: DatePickerProps) => {
  const { className, endDate, setEndDate, setStartDate, startDate } = props

  const onChangeHandler = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates

    setStartDate?.(start)
    setEndDate?.(end)
  }

  return (
    <DatePicker
      className={clsx(s.datePicker, className)}
      dateFormat={'dd/MM/yyyy'}
      endDate={endDate}
      onChange={onChangeHandler}
      selected={startDate}
      selectsRange
      showIcon
      startDate={startDate}
    />
  )
}
