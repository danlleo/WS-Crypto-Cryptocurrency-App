import React from 'react'
import { Link } from 'react-router-dom'

import './Banner.css'

export default function Banner({ showBtn }) {
  return (
    <div className='banner'>
      <h1>WS Crypto</h1>
      <p>A Crypto Currency Web Application</p>
      {showBtn && <Link to='/watchlist'>Watchlist</Link>}
    </div>
  )
}
