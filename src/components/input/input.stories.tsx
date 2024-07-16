import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Input } from './Input'

const meta = {
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['password', 'text'],
    },
  },
  args: {
    disabled: false,
    label: 'Label',
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default = {} satisfies Story
export const PasswordInput = {
  args: {
    type: 'password',
  },
} satisfies Story

export const SearchInput = {
  args: {
    search: true,
  },
  render: args => {
    const [value, setValue] = useState('')

    return (
      <>
        <Input
          onChange={e => setValue(e.target.value)}
          onInputClear={() => setValue('')}
          search
          value={value}
        />
      </>
    )
  },
} satisfies Story

export const ErrorInput = {
  args: {
    errorMessage: 'Error text',
  },
} satisfies Story

export const DisabledInput = {
  args: {
    disabled: true,
  },
} satisfies Story
