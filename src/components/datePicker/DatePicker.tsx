import DatePicker, { type ReactDatePickerCustomHeaderProps } from 'react-datepicker'

import clsx from 'clsx'
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'

// import 'react-datepicker/dist/react-datepicker.css'

import s from './datePicker.module.scss'

import SvgCalendar from '../../assets/icons/Calendar'
import { Input, type InputProps } from '../input/Input'
import { Typography } from './../typography'

type DatePickerProps = {
  className?: string
  endDate?: Date
  label?: string
  setEndDate?: (date: Date | null) => void
  setStartDate: (date: Date | null) => void
  startDate: Date
}

export const DatePickerComponent = (props: DatePickerProps) => {
  const { className, endDate, label, setEndDate, setStartDate, startDate } = props
  const isRange = endDate !== undefined

  const onChangeHandler = (dates: [Date | null, Date | null] | Date) => {
    if (Array.isArray(dates)) {
      const [start, end] = dates

      setStartDate(start)
      setEndDate?.(end)
    } else {
      setStartDate(dates)
    }
  }

  const classNames = {
    day: () => s.days,
  }

  return (
    <div className={s.box}>
      <DatePicker
        calendarClassName={s.calendar}
        className={s.datePicker}
        // customInput={<Input className={s.input} />}
        customInput={<RenderCustomInput />}
        dateFormat={'dd/MM/yyyy'}
        dayClassName={(date: Date) => s.days}
        endDate={endDate}
        // icon={<SvgCalendar className={s.calendarIcon} />}
        locale={enGB}
        onChange={onChangeHandler}
        renderCustomHeader={RenderCustomHeader}
        selected={startDate}
        selectsRange={isRange}
        startDate={startDate}
      />
    </div>
  )
}

const RenderCustomInput = ({ ...rest }: InputProps) => {
  return (
    <div className={s.inputContainer}>
      <Input
        className={s.input}
        icon={<SvgCalendar className={s.calendarIcon} />}
        label={'label'}
        {...rest}
      />
      {/*<div className={s.calendarIcon}>*/}
      {/*  <SvgCalendar />*/}
      {/*</div>*/}
    </div>
  )
}

const RenderCustomHeader = ({
  changeMonth,
  changeYear,
  date,
  decreaseMonth,
  increaseMonth,
}: ReactDatePickerCustomHeaderProps) => {
  return (
    <div className={s.headerContainer}>
      <div className={s.monthsYear}>{format(date, 'LLLL y')}</div>
      <button onClick={decreaseMonth} type={'button'}>
        {'<'}
      </button>
      <button onClick={increaseMonth} type={'button'}>
        {'>'}
      </button>
    </div>
  )
}
