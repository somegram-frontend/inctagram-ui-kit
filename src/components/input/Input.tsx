import React, { type ComponentPropsWithoutRef, useState } from 'react'

import s from './input.module.scss'

import Eye from '../../assets/icons/Eye'
import EyeOff from '../../assets/icons/EyeOff'
import Search from '../../assets/icons/Search'
import { Typography } from '../typography/Typography.tsx'

export type InputProps = {
  errorMessage?: string
  label?: string
  onInputClear?: (value: string) => void
  search?: boolean
} & ComponentPropsWithoutRef<'input'>

export const Input = ({
  errorMessage,
  label,
  onChange,
  onInputClear,
  search,
  type,
  value,
  ...rest
}): InputProps => {
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
        <Typography className={s.label} variant={'regular_text14'}>
          {label}
        </Typography>
      )}
      <div className={s.inputContainer}>
        {search && <Search />}
        <input className={s.input} onChange={onChangeHandler} type={setType} {...rest} />
        {showClearIcon && (
          <button onClick={onClearClickHandler} type={'button'}>
            X
          </button>
        )}
        {isPassword && (
          <button
            className={s.eyeButton}
            onClick={() => setHidePassword(prevState => !hidePassword)}
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

const getType = (isPassword: boolean, hidePassword: boolean) => {
  if (isPassword && hidePassword) {
    return 'password'
  }

  return 'text'
}
