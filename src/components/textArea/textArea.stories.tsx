import type { Meta, StoryObj } from '@storybook/react'

import s from './textArea.module.scss'

import { TextArea } from './TextArea'

const meta = {
  args: {
    containerClassName: s.containerClassName,
    label: 'Text-area',
    placeholder: 'Text-area',
  },
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/TextArea',
} satisfies Meta<typeof TextArea>

export default meta

type Story = StoryObj<typeof TextArea>

export const Default = {
  args: {},
} satisfies Story

export const Disabled = {
  args: {
    disabled: true,
  },
} satisfies Story

export const Error = {
  args: {
    error: 'Error!',
  },
} satisfies Story
