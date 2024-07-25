import { type Meta, type StoryObj } from '@storybook/react'

import { Sidebars } from './Sidebars'

const meta = {
  component: Sidebars,
  tags: ['autodocs'],
  title: 'Components/Sidebars',
} satisfies Meta<typeof Sidebars>

export default meta

type Story = StoryObj<typeof Sidebars>

export const Default: Story = {
  render: () => <Sidebars />,
} satisfies Story
