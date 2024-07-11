import { type ComponentPropsWithoutRef, type ElementType } from 'react'

import clsx from 'clsx'

import s from './typography.module.scss'

type TypographyProps<E extends ElementType> = {
  /** Path name string of html valid tag  like h1-h6, label, span, p and etc...(default div) . */
  as?: E
  className?: string
  /** Variant of  style according to ui template */
  variant?:
    | 'Bold_text16'
    | 'Medium_text14'
    | 'Semi_bold_small_text'
    | 'bold_text14'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'large'
    | 'regular_link'
    | 'regular_text14'
    | 'regular_text16'
    | 'small_link'
    | 'small_text'
} & ComponentPropsWithoutRef<E>

export const Typography = <E extends ElementType>({
  as,
  children,
  className,
  variant,
  ...rest
}: TypographyProps<E>) => {
  const Component = as ?? 'div'

  return (
    <Component className={clsx(s.typography, s[variant], className)} {...rest}>
      {children}
    </Component>
  )
}
