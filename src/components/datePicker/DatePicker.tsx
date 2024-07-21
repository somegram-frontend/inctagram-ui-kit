import DatePicker, { type ReactDatePickerCustomHeaderProps } from 'react-datepicker'

import clsx from 'clsx'
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'

// import 'react-datepicker/dist/react-datepicker.css'

import s from './datePicker.module.scss'

import SvgCalendar from '../../assets/icons/Calendar'
import ChevronLeft from '../../assets/icons/ChevronLeft'
import ChevronRight from '../../assets/icons/ChevronRight'
import { Input, type InputProps } from '../input/Input'
import { Typography } from '../typography/Typography'

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

  return (
    <div className={clsx(s.box, className)}>
      <DatePicker
        calendarClassName={s.calendar}
        customInput={<RenderCustomInput />}
        dateFormat={'dd/MM/yyyy'}
        dayClassName={(date: Date) => s.monthsNames}
        endDate={endDate}
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

const RenderCustomInput = ({ className, ...rest }: InputProps) => {
  return (
    <Input
      className={s.input}
      icon={<SvgCalendar className={s.calendarIcon} />}
      label={'label'}
      {...rest}
    />
  )
}

const RenderCustomHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
}: ReactDatePickerCustomHeaderProps) => {
  return (
    <div className={s.headerContainer}>
      <div className={s.monthsYear}>
        <Typography variant={'bold_text16'}>{format(date, 'LLLL y')}</Typography>{' '}
      </div>
      <button className={s.button} onClick={decreaseMonth} type={'button'}>
        {<ChevronLeft />}
      </button>
      <button className={s.button} onClick={increaseMonth} type={'button'}>
        {<ChevronRight />}
      </button>
    </div>
  )
}
