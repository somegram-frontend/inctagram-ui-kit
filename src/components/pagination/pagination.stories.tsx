import type { Meta, StoryObj } from '@storybook/react'

import { withRouter } from 'storybook-addon-remix-react-router'

import { Pagination } from './Pagination'

const meta = {
  component: Pagination,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof Pagination>

export const Default = {
  args: {
    totalCount: 2000,
  },
} satisfies Story
