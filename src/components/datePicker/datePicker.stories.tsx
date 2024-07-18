import type { Meta, StoryObj } from '@storybook/react'

import { DatePickerComponent } from './DatePicker'

const meta = {
  component: DatePickerComponent,
  tags: ['autodocs'],
  title: 'Components/DatePickerComponent',
} satisfies Meta<typeof DatePickerComponent>

export default meta
type Story = StoryObj<typeof DatePickerComponent>

export const Default = {
  args: {},
} satisfies Story
