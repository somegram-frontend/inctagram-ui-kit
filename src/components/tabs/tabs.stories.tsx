import { useState } from 'react'

import { type Meta } from '@storybook/react'

import { type Tab, Tabs } from './Tabs'

const meta = {
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta

const text =
  "Advertisers study how people learn so that they can 'teach' them to respond to their advertising. They want us to be interested, to try something, and then to do it again. These are the elements of learning: interest, experience and repetition. If an advert can achieve this, it is successful. If an advert works well, the same technique can be used to advertise different things. So, for example, in winter if the weather is cold and you see a family having a warming cup of tea and feeling cosy, you may be interested and note the name of the tea ... Here the same technique is being used as with the cool, refreshing drink."

const ContentFirst = () => {
  return <div style={{ color: 'red', maxWidth: '100%', width: '350px' }}>{text}</div>
}
const ContentSecond = () => {
  return <div style={{ color: 'blue', maxWidth: '100%', width: '350px' }}>{text}</div>
}
const ContentThird = () => {
  return <div style={{ color: 'green', maxWidth: '100%', width: '350px' }}>{text}</div>
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
