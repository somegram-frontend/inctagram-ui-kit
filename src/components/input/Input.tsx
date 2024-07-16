import React, { type ComponentPropsWithoutRef, type ElementRef, forwardRef, useState } from 'react'

import clsx from 'clsx'

import s from './input.module.scss'

import CloseOutline from '../../assets/icons/CloseOutline'
import Eye from '../../assets/icons/Eye'
import EyeOff from '../../assets/icons/EyeOff'
import Search from '../../assets/icons/Search'
import { Typography } from '../typography/Typography'

export type InputProps = {
  errorMessage?: string
  label?: string
  onInputClear?: (value: string) => void
  search?: boolean
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<ElementRef<'input'>, InputProps>(
  (
    {
      className,
      disabled,
      errorMessage,
      label,
      onChange,
      onInputClear,
      search,
      type,
      value,
      ...rest
    },
    ref
  ) => {
    const [hidePassword, setHidePassword] = useState(true)
    const isPassword = type === 'password'
    const setType = getType(isPassword, hidePassword)
    const showClearIcon = search && value

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
    }

    const onClearClickHandler = () => {
      onInputClear?.('')
    }

    return (
      <div className={s.box}>
        {label && (
          <Typography
            className={clsx(s.label, disabled && s.disabledLabel)}
            variant={'regular_text14'}
          >
            {label}
          </Typography>
        )}
        <div className={s.inputContainer}>
          {search && (
            <Search
              className={clsx(
                s.searchIcon,
                disabled && s.disabledSearch,
                errorMessage && s.errorSearch
              )}
            />
          )}
          <input
            className={clsx(
              s.input,
              errorMessage && s.error,
              search && s.search,
              isPassword && s.password,
              className
            )}
            disabled={disabled}
            onChange={onChangeHandler}
            ref={ref}
            type={setType}
            value={value}
            {...rest}
          />
          {showClearIcon && (
            <button className={s.clearButton} onClick={onClearClickHandler} type={'button'}>
              <CloseOutline />
            </button>
          )}
          {isPassword && (
            <button
              className={s.eyeButton}
              disabled={disabled}
              onClick={() => setHidePassword(hidePassword => !hidePassword)}
              type={'button'}
            >
              {hidePassword ? <Eye /> : <EyeOff />}
            </button>
          )}
        </div>
        <div>{errorMessage && <Typography variant={'error_text'}>{errorMessage}</Typography>}</div>
      </div>
    )
  }
)

const getType = (isPassword: boolean, hidePassword: boolean) => {
  if (isPassword && hidePassword) {
    return 'password'
  }

  return 'text'
}

Input.displayName = 'Input'
