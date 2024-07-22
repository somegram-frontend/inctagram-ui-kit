import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { DatePickerComponent } from './DatePicker'

const meta = {
  component: DatePickerComponent,
  tags: ['autodocs'],
  title: 'Components/DatePickerComponent',
} satisfies Meta<typeof DatePickerComponent>

export default meta
type Story = StoryObj<typeof DatePickerComponent>

export const Default = {
  args: {
    label: 'Date',
  },
  render: args => {
    const { label } = args
    const [startDate, setStartDate] = useState<Date | undefined>(undefined)

    return <DatePickerComponent label={label} setStartDate={setStartDate} startDate={startDate} />
  },
} satisfies Story

export const Error = {
  args: {
    errorMessage: 'Error!',
    label: 'Date',
  },
  render: args => {
    const { errorMessage, label } = args
    const [startDate, setStartDate] = useState<Date | undefined>(undefined)

    return (
      <DatePickerComponent
        errorMessage={errorMessage}
        label={label}
        setStartDate={setStartDate}
        startDate={startDate}
      />
    )
  },
} satisfies Story

export const DateRange = {
  args: {
    label: 'Date range',
    selectsRange: true,
  },
  render: args => {
    const { label, selectsRange } = args

    const [startDate, setStartDate] = useState<Date | undefined>(undefined)
    const [endDate, setEndDate] = useState<Date | undefined>(undefined)

    return (
      <DatePickerComponent
        endDate={endDate}
        label={label}
        selectsRange={selectsRange}
        setEndDate={setEndDate}
        setStartDate={setStartDate}
        startDate={startDate}
      />
    )
  },
} satisfies Story

export const Disabled = {
  args: {
    disabled: true,
    label: 'Date',
  },
  render: args => {
    const { disabled, label } = args
    const [startDate, setStartDate] = useState<Date | undefined>(undefined)

    return (
      <DatePickerComponent
        disabled={disabled}
        label={label}
        setStartDate={setStartDate}
        startDate={startDate}
      />
    )
  },
} satisfies Story
