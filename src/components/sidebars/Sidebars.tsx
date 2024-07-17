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
      <div className={s.content}>
        <ul>
          <Typography as={'li'} variant={'medium_text14'}>
            <HomeIcon /> Home
          </Typography>
          <Typography as={'li'} variant={'medium_text14'}>
            <CreateIcon /> Create
          </Typography>
          <Typography as={'li'} variant={'medium_text14'}>
            <MyProfileIcon /> My Profile
          </Typography>
          <Typography as={'li'} variant={'medium_text14'}>
            <MessengerIcon /> Messenger
          </Typography>
          <Typography as={'li'} variant={'medium_text14'}>
            <SearchIcon /> Search
          </Typography>
        </ul>
        <ul>
          <Typography as={'li'} variant={'medium_text14'}>
            <StatisticIcon /> Statistics
          </Typography>
          <Typography as={'li'} variant={'medium_text14'}>
            <FavoriteIcon /> Favorites
          </Typography>
        </ul>
        <ul>
          <Typography as={'li'} variant={'medium_text14'}>
            <LogOutIcon /> Log Out
          </Typography>
        </ul>
      </div>
    </div>
  )
}
