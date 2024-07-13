import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './Typography'

const meta = {
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
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof Typography>

export const Default = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
} satisfies Story

export const Large = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'large',
  },
} satisfies Story

export const H1 = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'h1',
  },
} satisfies Story

export const H2 = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'h2',
  },
} satisfies Story

export const H3 = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'h3',
  },
} satisfies Story

export const regular_text16 = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'regular_text16',
  },
} satisfies Story

export const Bold_text16 = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'Bold_text16',
  },
} satisfies Story

export const regular_text14 = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'regular_text14',
  },
} satisfies Story

export const Medium_text14 = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'Medium_text14',
  },
} satisfies Story

export const bold_text14 = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'bold_text14',
  },
} satisfies Story

export const small_text = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'small_text',
  },
} satisfies Story

export const Semi_bold_small_text = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'Semi_bold_small_text',
  },
} satisfies Story

export const regular_link = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'regular_link',
  },
} satisfies Story

export const small_link = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'small_link',
  },
} satisfies Story

export const error_text = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'error_text',
  },
} satisfies Story
