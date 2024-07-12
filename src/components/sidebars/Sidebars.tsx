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
      <div className={s.content}>
        <ul>
          <li>
            <HomeIcon />
            Home
          </li>
          <li>
            <CreateIcon />
            Create
          </li>
          <li>
            <MyProfileIcon />
            My Profile
          </li>
          <li>
            <MessengerIcon />
            Messenger
          </li>
          <li>
            <SearchIcon />
            Search
          </li>
        </ul>
        <ul>
          <li>
            <StatisticIcon />
            Statistics
          </li>
          <li>
            <FavoriteIcon />
            Favorites
          </li>
        </ul>

        <ul>
          <li>
            <LogOutIcon />
            Log Out
          </li>
        </ul>
      </div>
    </div>
  )
}
