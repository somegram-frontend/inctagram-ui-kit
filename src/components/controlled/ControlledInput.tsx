import { Control, FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '../input/Input'

type Props<T extends FieldValues> = { control: Control<T> } & Omit<
  InputProps,
  'onChange' | 'value'
> &
  Omit<UseControllerProps<T>, 'control'>

export const ControlledInput = <T extends FieldValues>({
  control,
  name,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    name,
    shouldUnregister,
  })

  return <Input {...rest} onChange={onChange} value={value}></Input>
}
