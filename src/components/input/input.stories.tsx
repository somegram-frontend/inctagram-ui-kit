import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'

const meta = {
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof Input>

export const Default = {
  args: {
    errorMessage: 'error',
    label: 'Label',
  },
}
export const PasswordInput = {
  args: {
    type: 'password',
  },
}

export const SearchInput = {
  args: {
    search: true,
  },
}
