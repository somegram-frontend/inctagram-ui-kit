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
    value: 'Epam@epam.com',
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default = {
  args: {},
} satisfies Story
export const PasswordInput = {
  args: {
    type: 'password',
  },
} satisfies Story

export const SearchInput = {
  args: {
    errorMessage: '',
    search: true,
  },
  render: args => {
    const { disabled, errorMessage, search } = args
    const [value, setValue] = useState('')

    return (
      <>
        <Input
          disabled={disabled}
          errorMessage={errorMessage}
          onChange={e => setValue(e.target.value)}
          onInputClear={() => setValue('')}
          search={search}
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
