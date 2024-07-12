import React from 'react'

import { Button } from '../button'
import { Select } from '../select/Select'

export const HeaderWidget = () => {
  const options = [
    { label: 'label1', value: 'value1' },
    { label: 'label2', value: 'value2' },
  ]

  return (
    <header>
      <div>
        Somegram
        <div>
          <Select options={options} />
          <div>
            <Button as={'a'}>
              <a href={'/signin'}>signin</a>
            </Button>
            <div>
              <Button variant={'primary'}>
                <a href={'/signup'}>signup</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
