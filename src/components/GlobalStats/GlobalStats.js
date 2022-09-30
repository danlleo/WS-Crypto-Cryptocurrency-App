import React from 'react'
import millify from 'millify'
import { useGetCryptosQuery } from '../../services/cryptoApi'
import {
  ClockCircleOutlined,
  CopyrightOutlined,
  DollarOutlined,
  GlobalOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons/lib/icons'

import './GlobalStats.css'

export default function GlobalStats() {
  const { data, isFetching } = useGetCryptosQuery(10)

  const globalStats = data?.data?.stats

  if (isFetching) return 'Loading...'

  return (
    <div className='globalstats-container'>
      <div className='globalstats-item'>
        <div className='globalstats-item_icon'>
          <GlobalOutlined className='icon-global' />
        </div>
        <div className='globalstats-item_data'>
          <h2>Total</h2>
          <p>{millify(globalStats.total)}</p>
        </div>
      </div>
      <div className='globalstats-item'>
        <div className='globalstats-item_icon'>
          <ClockCircleOutlined className='icon-global' />
        </div>
        <div className='globalstats-item_data'>
          <h2>Total 24h</h2>
          <p>{millify(globalStats.total24hVolume)}</p>
        </div>
      </div>
      <div className='globalstats-item'>
        <div className='globalstats-item_icon'>
          <CopyrightOutlined className='icon-global' />
        </div>
        <div className='globalstats-item_data'>
          <h2>Total Coins</h2>
          <p>{millify(globalStats.totalCoins)}</p>
        </div>
      </div>
      <div className='globalstats-item'>
        <div className='globalstats-item_icon'>
          <DollarOutlined className='icon-global' />
        </div>
        <div className='globalstats-item_data'>
          <h2>Total Exchanges</h2>
          <p>{millify(globalStats.totalExchanges)}</p>
        </div>
      </div>
      <div className='globalstats-item'>
        <div className='globalstats-item_icon'>
          <UserOutlined className='icon-global' />
        </div>
        <div className='globalstats-item_data'>
          <h2>Total Market</h2>
          <p>{millify(globalStats.totalMarketCap)}</p>
        </div>
      </div>
      <div className='globalstats-item'>
        <div className='globalstats-item_icon'>
          <TeamOutlined className='icon-global' />
        </div>
        <div className='globalstats-item_data'>
          <h2>Total Markets</h2>
          <p>{millify(globalStats.totalMarkets)}</p>
        </div>
      </div>
    </div>
  )
}
