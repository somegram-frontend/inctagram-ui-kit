import { type Meta, type StoryObj } from '@storybook/react'

import { Header } from './Header'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {
    isAuth: true,
  },
} satisfies Story
