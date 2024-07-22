import { type ComponentPropsWithoutRef, type ElementRef, type ReactNode, forwardRef } from 'react'

import * as TabsSwitcher from '@radix-ui/react-tabs'
import classNames from 'clsx'

import s from './tabs.module.scss'

export type Tab = {
  content?: ReactNode
  disabled?: boolean
  text: string
  value: string
}

type Props = {
  onValueChange: (value: string) => void
  tabs: Tab[]
} & ComponentPropsWithoutRef<typeof TabsSwitcher.Root>

export const Tabs = forwardRef<ElementRef<typeof TabsSwitcher.Root>, Props>((props, ref) => {
  const { className, onValueChange, tabs, value, ...rest } = props

  return (
    <TabsSwitcher.Root
      className={classNames(s.root, className)}
      onValueChange={onValueChange}
      ref={ref}
      value={value}
      {...rest}
    >
      <TabsSwitcher.List>
        {tabs.map(t => (
          <TabsSwitcher.Trigger
            className={s.trigger}
            disabled={t.disabled}
            key={t.value}
            value={t.value}
          >
            {t.text}
          </TabsSwitcher.Trigger>
        ))}
      </TabsSwitcher.List>
      {tabs.map(tab => {
        return (
          tab.content && (
            <TabsSwitcher.Content key={tab.value} value={tab.value}>
              {tab.content}
            </TabsSwitcher.Content>
          )
        )
      })}
    </TabsSwitcher.Root>
  )
})

Tabs.displayName = 'Tabs'
