import React from 'react'

import s from './sidebars.module.scss'

import {
  CreateIcon,
  FavoriteIcon,
  HomeIcon,
  LogOutIcon,
  MessengerIcon,
  MyProfileIcon,
  SearchIcon,
  StatisticIcon,
} from '../../assets/icons'
export const Sidebars = () => {
  return (
    <div className={s.box}>
      <div className={s.contentBox}>
        <div className={s.marginTop}></div>
        <ul>
          <li>
            <HomeIcon />
          </li>
          <li>
            <CreateIcon />
          </li>
          <li>
            <MyProfileIcon />
          </li>
          <li>
            <MessengerIcon />
          </li>
          <li>
            <SearchIcon />
          </li>
        </ul>
        <div className={s.marginBox}></div>
        <ul>
          <li>
            <StatisticIcon />
          </li>
          <li>
            <FavoriteIcon />
          </li>
        </ul>
        <div className={s.largeMargin}></div>
        <ul>
          <li className={s.content}>
            <LogOutIcon />
          </li>
        </ul>
      </div>
    </div>
  )
}
