import { type ReactDatePickerCustomHeaderProps } from 'react-datepicker'
import * as RDP from 'react-datepicker'
import { ElementRef, FC, forwardRef } from 'react'
import { clsx } from 'clsx'
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import inputStyles from '../input/input.module.scss'
import s from './datePicker.module.scss'
import { CalendarOutline, ChevronLeft, ChevronRight } from '../../assets/icons'
import { Input, type InputProps } from '../input/Input'
import { Typography } from '../typography'

export type DatePickerProps = {
  disabled?: boolean
  endDate?: Date | undefined
  errorMessage?: string
  label?: string
  selectsRange?: boolean
  setEndDate?: (date: Date | undefined) => void
  setStartDate: (date: Date | undefined) => void
  startDate: Date | undefined
}

const RDPC = (((RDP.default as any).default as any) ||
  (RDP.default as any) ||
  (RDP as any)) as typeof RDP.default

export const DatePicker: FC<DatePickerProps> = ({
  disabled,
  endDate,
  errorMessage,
  label,
  selectsRange,
  setEndDate,
  setStartDate,
  startDate,
  ...rest
}) => {
  const onChangeHandler = (dates: [Date | null, Date | null] | Date | null) => {
    if (!dates) {
      return
    }

    if (Array.isArray(dates)) {
      if (dates.length !== 2) {
        return
      }
      const [start, end] = dates

      setStartDate(start || undefined)
      setEndDate?.(end || undefined)
    } else {
      setStartDate(dates)
    }
  }

  return (
    <div className={s.box} {...rest}>
      <RDPC
        calendarClassName={s.calendar}
        calendarStartDay={1}
        className={s.datePicker}
        customInput={<CustomInput disabled={disabled} errorMessage={errorMessage} label={label} />}
        dateFormat={'dd/MM/yyyy'}
        dayClassName={() => s.dayDate}
        disabled={disabled}
        endDate={endDate}
        locale={enGB}
        onChange={onChangeHandler}
        popperPlacement={'bottom-start'}
        renderCustomHeader={CustomHeader}
        selected={startDate}
        selectsMultiple={undefined}
        selectsRange={(selectsRange as true) || undefined}
        showPopperArrow={false}
        startDate={startDate}
        toggleCalendarOnIconClick
        {...rest}
      />
    </div>
  )
}

const CustomInput = forwardRef<ElementRef<'input'>, InputProps>(
  ({ className, disabled, errorMessage, label, ...rest }, ref) => {
    return (
      <Input
        className={clsx(s.dateInput, inputStyles.input, errorMessage && s.hasError)}
        disabled={disabled}
        errorMessage={errorMessage}
        icon={<CalendarOutline className={clsx(s.calendarIcon, errorMessage && s.hasError)} />}
        label={label}
        ref={ref}
        {...rest}
      />
    )
  }
)

const CustomHeader = ({ date, decreaseMonth, increaseMonth }: ReactDatePickerCustomHeaderProps) => {
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

DatePicker.displayName = 'DatePicker'
