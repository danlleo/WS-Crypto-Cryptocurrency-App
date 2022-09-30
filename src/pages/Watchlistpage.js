import React from 'react'
import Banner from '../components/Banner/Banner'
import Watchlist from '../components/Watchlist/Watchlist'

export default function Watchlistpage() {
  return (
    <>
      <Banner />
      <div className='page-container'>
        <Watchlist />
      </div>
    </>
  )
}
