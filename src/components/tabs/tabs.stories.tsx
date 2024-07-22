import { useState } from 'react'

import { type Meta } from '@storybook/react'

import { type Tab, Tabs } from './Tabs'

const meta = {
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta

const ContentFirst = () => {
  return (
    <div style={{ color: 'red', maxWidth: '100%', width: '350px' }}>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
      classical Latin literature from 45 BC, making it over 2000 years old. Richard , a Latin
      professor at College in Virginia, looked up one of the more obscure Latin words, consectetur,
      from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
      discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The
      Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
      of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, ipsum dolor sit
      , comes from a line in section 1.10.32.
    </div>
  )
}
const ContentSecond = () => {
  return (
    <div style={{ color: 'blue', maxWidth: '100%', width: '350px' }}>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
      classical Latin literature from 45 BC, making it over 2000 years old. Richard , a Latin
      professor at Sydney College in Virginia, looked up one of the more obscure Latin words,
      consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
      literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
      1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
      treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem
      Ipsum, comes from a line in section 1.10.32.
    </div>
  )
}
const ContentThird = () => {
  return (
    <div style={{ color: 'green', maxWidth: '100%', width: '350px' }}>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
      classical Latin literature from 45 BC, making it over 2000 years old. Richard , a Latin
      professor at Sydney College in Virginia, looked up one of the more obscure Latin words,
      consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
      literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
      1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
      treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem
      IpsumLorem ipsum dolor sit , comes from a line in section 1.10.32.
    </div>
  )
}

const tabs: Tab[] = [
  { content: <ContentFirst />, text: 'First', value: 'First' },
  { content: <ContentSecond />, text: 'Second', value: 'Second' },
  { content: <ContentThird />, text: 'Third', value: 'Third' },
  { disabled: true, text: 'Disabled', value: 'disabled' },
]

export const Default = {
  render: () => {
    const [value, setValue] = useState<string>()

    return (
      <div>
        <Tabs defaultValue={tabs[0]?.value} onValueChange={setValue} tabs={tabs} value={value} />
        <p style={{ marginTop: '20px' }}>changed value: {value}</p>
      </div>
    )
  },
}
