import type { ComponentPropsWithoutRef, ElementType } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

export type RecaptchaProps<T extends ElementType> = ComponentPropsWithoutRef<T>

export const Recaptcha = <T extends ElementType>(props: RecaptchaProps<T>) => {
  const { ...rest } = props

  return <ReCAPTCHA sitekey={rest.sitekey} theme={rest.theme} {...rest} />
}
