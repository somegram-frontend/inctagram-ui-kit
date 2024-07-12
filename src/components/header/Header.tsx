import React, { useState } from 'react'

import styles from './header.module.scss'

import { Bell } from '../../assets/icons/Bell'
import { EnglandFlag } from '../../assets/icons/EnglandFlag'
import { RussianFlag } from '../../assets/icons/RussianFlag'
import { Select } from '../select/Select'

type HeaderProps = {
  isAuth: boolean
}
export const Header = ({ isAuth }: HeaderProps) => {
  const options = [
    {
      label: (
        <div className={styles.flagContainer}>
          <EnglandFlag /> &nbsp; <span> English</span>
        </div>
      ),
      value: 'value1',
    },
    {
      label: (
        <div className={styles.flagContainer}>
          <RussianFlag />
          &nbsp;
          <span>Russian</span>
        </div>
      ),
      value: 'value2',
    },
  ]

  return isAuth ? (
    <header className={styles.header}>
      <div className={styles.logo}>Somegram</div>
      <nav className={styles.register}>
        <div className={styles.bell}>
          <Bell />
        </div>
        <Select
          className={styles.dropdown}
          options={options}
          placeholder={
            <div className={styles.flagContainer}>
              <EnglandFlag /> &nbsp; <span> English</span>
            </div>
          }
        />
      </nav>
    </header>
  ) : (
    <header className={styles.header}>
      <div className={styles.logo}>Somegram</div>
      <nav className={styles.register}>
        <Select
          className={styles.dropdown}
          options={options}
          placeholder={
            <div className={styles.flagContainer}>
              <EnglandFlag /> &nbsp; <span> English</span>
            </div>
          }
        />
        <div className={styles.buttons}>
          <button className={styles.button}>Log in</button>
          <button className={styles.button}>Sign up</button>
        </div>
      </nav>
    </header>
  )
}
