import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '../checkbox/Checkbox'

type Props<T extends FieldValues> = Omit<CheckboxProps, 'checked' | 'id' | 'onCheckedChange'> &
  UseControllerProps<T>

const ControlledCheckbox = <T extends FieldValues>({ control, name, ...rest }: Props<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    name,
  })

  return <Checkbox {...rest} checked={value} onCheckedChange={onChange}></Checkbox>
}

export default ControlledCheckbox
