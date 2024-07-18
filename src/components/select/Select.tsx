import { type ComponentPropsWithoutRef, type ElementRef, type ReactNode, forwardRef } from 'react'

import * as SelectRadix from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './select.module.scss'

import Icon from '../../assets/icons/ArrowDown'

export type Option = {
  label: ReactNode | string
  value: string
}
type SelectProps = {
  className?: string
  label?: string
  onValueChange?: (value: string) => void
  options: Option[]
  placeholder?: ReactNode | string
  small?: boolean
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

type Props = Omit<ComponentPropsWithoutRef<typeof SelectRadix.Root>, keyof SelectProps> &
  SelectProps
export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, Props>((props, ref) => {
  const {
    className,
    disabled,
    label,
    onValueChange,
    options,
    placeholder,
    small = false,
    value,
    ...rest
  } = props

  return (
    <label className={clsx(s.label, className)}>
      {label}
      <SelectRadix.Root onValueChange={onValueChange} value={value} {...rest}>
        <SelectRadix.Trigger
          className={clsx(s.trigger, disabled && s.triggerDisabled, small && s.small)}
          disabled={disabled}
          ref={ref}
        >
          <SelectRadix.Value placeholder={placeholder} />
          <SelectRadix.Icon asChild className={'SelectIcon'}>
            <Icon className={clsx(s.icon, disabled && s.iconDisabled)} name={'arrow'} />
          </SelectRadix.Icon>
        </SelectRadix.Trigger>
        <SelectRadix.Portal>
          <SelectRadix.Content className={s.content} position={'popper'}>
            <SelectRadix.Viewport>
              {options.map(el => (
                <SelectRadix.Item
                  className={clsx(s.item, small && s.small)}
                  key={el.value}
                  value={el.value}
                >
                  <SelectRadix.ItemText>{el.label}</SelectRadix.ItemText>
                </SelectRadix.Item>
              ))}
            </SelectRadix.Viewport>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    </label>
  )
})

Select.displayName = 'Select'
