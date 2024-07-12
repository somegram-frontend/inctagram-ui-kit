import { type ComponentPropsWithoutRef, type ElementType } from 'react'

import clsx from 'clsx'

import s from './typography.module.scss'

type TypographyProps<E extends ElementType> = {
  /** Path name string of html valid tag  like h1-h6, label, span, p and etc...(default div) . */
  as?: E
  /** Variant of  style according to ui template */
  variant?:
    | 'bold_text14'
    | 'bold_text16'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'large'
    | 'medium_text14'
    | 'regular_link'
    | 'regular_text14'
    | 'regular_text16'
    | 'semi_bold_small_text'
    | 'small_link'
    | 'small_text'
} & ComponentPropsWithoutRef<E>

export const Typography = <E extends ElementType>({
  as,
  children,
  className,
  variant = 'large',
  ...rest
}: TypographyProps<E>) => {
  const Component = as ?? 'span'

  return (
    <Component className={clsx(s.typography, s[variant], className)} {...rest}>
      {children}
    </Component>
  )
}
