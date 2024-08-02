import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Recaptcha } from './Recaptcha'

const meta = {
  argTypes: {
    sitekey: {
      control: { type: 'text' },
      defaultValue: '6LdrtRAqAAAAAOOZulAzNVZ3nynD5s-QI2rgIdes',
    },
    theme: {
      control: { type: 'select' },
      defaultValue: 'dark',
      options: ['light', 'dark'],
    },
  },
  component: Recaptcha,
  tags: ['autodocs'],
  title: 'Components/Recaptcha',
} as Meta<typeof Recaptcha>

export default meta
type Story = StoryObj<typeof Recaptcha>

export const Default = {
  args: {
    sitekey: '6LdrtRAqAAAAAOOZulAzNVZ3nynD5s-QI2rgIdes',
    theme: 'dark',
  },
  render: args => {
    const [checked, setReCaptcha] = useState(null)
    const onChangeHandler = (value: any) => setReCaptcha(value)

    if (checked) {
      alert(checked)
    }

    return <Recaptcha onChange={onChangeHandler} sitekey={args.sitekey} theme={args.theme} />
  },
} satisfies Story
