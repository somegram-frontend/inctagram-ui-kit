// import React, { type ComponentPropsWithoutRef, useState } from 'react'
//
// import Eye from '../../assets/icons/Eye'
// import EyeOff from '../../assets/icons/EyeOff'
// import Search from '../../assets/icons/Search'
//
// export type InputProps = {
//   errorMessage?: string
//   label?: string
//   onInputClear?: (value: string) => void
//   search?: boolean
// } & ComponentPropsWithoutRef<'input'>
//
// export const Input = ({
//   errorMessage,
//   label,
//   onChange,
//   onInputClear,
//   search,
//   type,
//   value,
//   ...rest
// }): InputProps => {
//   const [hidePassword, setHidePassword] = useState(true)
//   const isPassword = type === 'password'
//   const setType = getType(isPassword, hidePassword)
//   const showClearIcon = search && value
//
//   const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
//     onChange?.(e)
//   }
//
//   const onClearClickHandler = () => {
//     onInputClear?.('')
//   }
//
//   return (
//     <div>
//       {label && <span style={{ color: 'white' }}>{label}</span>}
//       <div>
//         {search && <Search />}
//         <input onChange={onChangeHandler} type={setType} {...rest} />
//       </div>
//       {showClearIcon && (
//         <button onClick={onClearClickHandler} type={'button'}>
//           X
//         </button>
//       )}
//       {isPassword && (
//         <button onClick={() => setHidePassword(prevState => !hidePassword)} type={'button'}>
//           {hidePassword ? <Eye /> : <EyeOff />}
//         </button>
//       )}
//       <div>{errorMessage && <span>{errorMessage}</span>}</div>
//     </div>
//   )
// }
//
// const getType = (isPassword: boolean, hidePassword: boolean) => {
//   if (isPassword && hidePassword) {
//     return 'password'
//   }
//
//   return 'text'
// }
