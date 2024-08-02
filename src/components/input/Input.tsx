import React, {
  type ComponentPropsWithoutRef,
  type ElementRef,
  type ReactNode,
  forwardRef,
  useState,
} from 'react'

import clsx from 'clsx'

import s from './input.module.scss'

import { CloseOutline, EyeOffOutline, EyeOutline, SearchOutline } from '../../assets/icons'
import { Typography } from '../typography'

export type InputProps = {
  errorMessage?: string
  icon?: ReactNode
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
      icon,
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
    const setType = isPassword && hidePassword ? 'password' : 'text'
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
            <SearchOutline
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
              {hidePassword ? <EyeOutline /> : <EyeOffOutline />}
            </button>
          )}
          {icon && <div>{icon}</div>}
        </div>
        <div>{errorMessage && <Typography variant={'error_text'}>{errorMessage}</Typography>}</div>
      </div>
    )
  }
)

Input.displayName = 'Input'
