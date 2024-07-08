import { type ComponentPropsWithoutRef, type ElementRef, forwardRef, useId } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import s from './checkbox.module.scss'

import CheckboxIcon from '../../assets/icons/CheckboxIcon'

export type CheckboxProps = {
  label?: string
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  (props, ref) => {
    const { checked, className, disabled, id, label, ...rest } = props
    const genID = useId()
    const finalId = id || genID

    return (
      <div className={s.container}>
        <div className={s.wrapperChecked}>
          <CheckboxRadix.Root
            checked={checked}
            className={s.checkboxRoot}
            disabled={disabled}
            id={finalId}
            ref={ref}
            {...rest}
          >
            <CheckboxRadix.Indicator className={s.checkboxIndicator}>
              <CheckboxIcon className={s.icon} />
            </CheckboxRadix.Indicator>
          </CheckboxRadix.Root>
        </div>
        {label && ( //TODO change to Typography component
          <label className={clsx(s.label, disabled && s.disabled)} htmlFor={finalId}>
            {label}
          </label>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'
