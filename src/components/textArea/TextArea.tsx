import { type ComponentPropsWithoutRef, type ElementRef, forwardRef, useId } from 'react'

import clsx from 'clsx'

import s from './textArea.module.scss'

import { Typography } from '../'

type Props = {
  containerClassName?: string
  error?: string
  label?: string
} & ComponentPropsWithoutRef<'textarea'>

export const TextArea = forwardRef<ElementRef<'textarea'>, Props>((props, ref) => {
  const { className, containerClassName, disabled, error, id, label, ...rest } = props

  const genID = useId()
  const finalId = id || genID

  const isError = Boolean(error)

  return (
    <div className={clsx(s.container, containerClassName)}>
      {Boolean(label) && (
        <label className={clsx(s.label, disabled && s.disabled)} htmlFor={finalId}>
          {label}
        </label>
      )}
      <textarea
        className={clsx(s.textArea, isError && s.error, className)}
        disabled={disabled}
        id={finalId}
        ref={ref}
        {...rest}
      />
      {isError && (
        <Typography as={'span'} variant={'error_text'}>
          {error}
        </Typography>
      )}
    </div>
  )
})

TextArea.displayName = 'TextArea'
