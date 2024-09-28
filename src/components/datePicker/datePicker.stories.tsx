import type { Meta, StoryObj } from '@storybook/react'

// import { useState } from 'react'

// import { DatePicker } from './DatePicker'
import DatePickerCustom from './DatePicker'

const meta = {
  // component: DatePicker,
  component: DatePickerCustom,
  tags: ['autodocs'],
  title: 'Components/DatePickerComponent',
  // } satisfies Meta<typeof DatePicker>
} satisfies Meta<typeof DatePickerCustom>

export default meta
// type Story = StoryObj<typeof DatePicker>
type Story = StoryObj<typeof DatePickerCustom>

export const Default = {
  args: {
    label: 'Date',
  },
  // render: args => {
  render: () => {
    // const { label } = args
    // const [startDate, setStartDate] = useState<Date | undefined>(undefined)

    // return <DatePicker label={label} setStartDate={setStartDate} startDate={startDate} />
    return <DatePickerCustom />
  },
} satisfies Story

// export const Error = {
//   args: {
//     errorMessage: 'Error!',
//     label: 'Date',
//   },
//   render: args => {
//     const { errorMessage, label } = args
//     const [startDate, setStartDate] = useState<Date | undefined>(undefined)

//     return (
//       <DatePicker
//         errorMessage={errorMessage}
//         label={label}
//         setStartDate={setStartDate}
//         startDate={startDate}
//       />
//     )
//   },
// } satisfies Story

// export const DateRange = {
//   args: {
//     label: 'Date range',
//     selectsRange: true,
//   },
//   render: args => {
//     const { label, selectsRange } = args

//     const [startDate, setStartDate] = useState<Date | undefined>(undefined)
//     const [endDate, setEndDate] = useState<Date | undefined>(undefined)

//     return (
//       <DatePicker
//         endDate={endDate}
//         label={label}
//         selectsRange={selectsRange}
//         setEndDate={setEndDate}
//         setStartDate={setStartDate}
//         startDate={startDate}
//       />
//     )
//   },
// } satisfies Story

// export const Disabled = {
//   args: {
//     disabled: true,
//     label: 'Date',
//   },
//   render: args => {
//     const { disabled, label } = args
//     const [startDate, setStartDate] = useState<Date | undefined>(undefined)

//     return (
//       <DatePicker
//         disabled={disabled}
//         label={label}
//         setStartDate={setStartDate}
//         startDate={startDate}
//       />
//     )
//   },
// } satisfies Story
