import React from 'react'

import s from './sidebars.module.scss'

import { Typography } from '../'
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
      <nav>
        <ul>
          <li>
            <HomeIcon /> Home
          </li>
          <li>
            <CreateIcon /> Create
          </li>
          <li>
            <MyProfileIcon /> My Profile
          </li>
          <li>
            <MessengerIcon /> Messenger
          </li>
          <li>
            <SearchIcon /> Search
          </li>
          <ul></ul>
          <li>
            <StatisticIcon /> Statistics
          </li>
          <li>
            <FavoriteIcon /> Favorites
          </li>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          <li>
            <LogOutIcon /> Log Out
          </li>
        </ul>
      </nav>
    </div>
  )
}
