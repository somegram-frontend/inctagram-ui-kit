import { type ComponentPropsWithoutRef, type ElementType, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

export type RecaptchaProps<T extends ElementType> = ComponentPropsWithoutRef<T>

export const Recaptcha = <T extends ElementType>(props: RecaptchaProps<T>) => {
  return (
    <div>
      <ReCAPTCHA
        hl={'en'}
        onChange={props.onChange}
        sitekey={props.sitekey}
        theme={props.theme}
        {...props}
      />
    </div>
  )
}
