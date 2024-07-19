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
    label: 'Label',
  },
  render: args => {
    const { label } = args
    const [startDate, setStartDate] = useState<Date | null>(null)

    return <DatePickerComponent label={label} setStartDate={setStartDate} startDate={startDate} />
  },
} satisfies Story

export const DateRange = {
  args: {},
  render: args => {
    const {} = args

    const [startDate, setStartDate] = useState<Date | null>(null)
    const [endDate, setEndDate] = useState<Date | null>(null)

    return (
      <DatePickerComponent
        endDate={endDate}
        setEndDate={setEndDate}
        setStartDate={setStartDate}
        startDate={startDate}
      />
    )
  },
} satisfies Story
