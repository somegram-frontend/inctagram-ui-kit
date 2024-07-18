import { type ComponentPropsWithoutRef, type ElementType, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

export type RecaptchaProps<T extends ElementType> = ComponentPropsWithoutRef<T>

export const Recaptcha = <T extends ElementType>(props: RecaptchaProps<T>) => {
  const { ...rest } = props

  return <ReCAPTCHA hl={'en'} sitekey={rest.sitekey} theme={rest.theme} {...rest} />
}

// Используйте этот секретный ключ для обмена данными между сайтом и сервисом reCAPTCHA.
// 6LdrtRAqAAAAAAAmAeQqpbR7MKtR907y2s_-x3Li
