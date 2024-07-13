import { type Meta } from '@storybook/react'

import { Button } from './button'

const meta = {
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta

export const Primary = {
  args: {
    children: 'Button',
    disabled: false,
    variant: 'primary',
  },
}

export const PrimaryDisabled = {
  args: {
    children: 'Button',
    disabled: true,
    variant: 'primary',
  },
}

export const Secondary = {
  args: {
    children: 'Button',
    disabled: false,
    variant: 'secondary',
  },
}

export const Outlined = {
  args: {
    children: 'Button',
    disabled: false,
    variant: 'outlined',
  },
}

export const Borderless = {
  args: {
    children: 'Button',
    disabled: false,
    variant: 'borderless',
  },
}

export const ButtonFullWidth = {
  args: {
    children: 'Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

export const ButtonAsLink = {
  args: {
    as: 'a',
    children: 'Button',
    disabled: false,
    href: 'https://www.google.ru/',
    variant: 'primary',
  },
}
