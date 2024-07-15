import { type Meta } from '@storybook/react'

import { Recaptcha } from './Recaptcha'

const meta = {
  component: Recaptcha,
  tags: ['autodocs'],
  title: 'Components/Recaptcha',
} satisfies Meta<typeof Recaptcha>

export default meta

export const recaptcha = {
  args: {
    sitekey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
    theme: 'dark',
  },
}
