import s from './header.module.scss'

import { Bell, EnglandFlag, RussianFlag } from '../../assets/icons'
import { Select } from '../select/Select'

type HeaderProps = {
  isAuth: boolean
}
export const Header = ({ isAuth }: HeaderProps) => {
  const options = [
    {
      label: (
        <div className={s.flagContainer}>
          <EnglandFlag /> &nbsp; <span> English</span>
        </div>
      ),
      value: 'value1',
    },
    {
      label: (
        <div className={s.flagContainer}>
          <RussianFlag />
          &nbsp;
          <span>Russian</span>
        </div>
      ),
      value: 'value2',
    },
  ]

  return isAuth ? (
    <header className={s.header}>
      <div className={s.logo}>Somegram</div>
      <nav className={s.register}>
        <div className={s.bell}>
          <Bell />
        </div>
        <Select
          className={s.dropdown}
          options={options}
          placeholder={
            <div className={s.flagContainer}>
              <EnglandFlag /> &nbsp; <span> English</span>
            </div>
          }
        />
      </nav>
    </header>
  ) : (
    <header className={s.header}>
      <div className={s.logo}>Somegram</div>
      <nav className={s.register}>
        <Select
          className={s.dropdown}
          options={options}
          placeholder={
            <div className={s.flagContainer}>
              <EnglandFlag /> &nbsp; <span> English</span>
            </div>
          }
        />
        <div className={s.buttons}>
          <button className={s.button}>Log in</button>
          <button className={s.button}>Sign up</button>
        </div>
      </nav>
    </header>
  )
}
