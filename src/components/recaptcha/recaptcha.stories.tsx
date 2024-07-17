import type { Meta, StoryObj } from '@storybook/react'

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
} satisfies Story
