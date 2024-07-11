import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './Typography'

const meta: Meta<typeof Typography> = {
  argTypes: {
    as: {
      control: false,
    },
    variant: {
      control: { type: 'select' },
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
}

export default meta
type Story = StoryObj<typeof Typography>

export const Large: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'large',
  },
}

export const H1: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'h1',
  },
}

export const H2: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'h2',
  },
}

export const H3: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'h3',
  },
}

export const regular_text16: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'regular_text16',
  },
}

export const Bold_text16: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'Bold_text16',
  },
}

export const regular_text14: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'regular_text14',
  },
}

export const Medium_text14: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'Medium_text14',
  },
}

export const bold_text14: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'bold_text14',
  },
}

export const small_text: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'small_text',
  },
}

export const Semi_bold_small_text: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'Semi_bold_small_text',
  },
}

export const regular_link: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'regular_link',
  },
}

export const small_link: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'small_link',
  },
}
