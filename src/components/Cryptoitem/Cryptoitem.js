import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'

import './Cryptoitem.css'

export default function Cryptoitem({
  name,
  iconUrl,
  price,
  cap,
  change,
  id,
  simplified,
}) {
  const [exist, setExist] = useState(false)

  const handleStorage = () => {
    if (!exist) {
      localStorage.setItem(
        name,
        JSON.stringify({
          name,
          iconUrl,
          price,
          cap,
          change,
          id,
        })
      )
      setExist(true)
      return
    }

    localStorage.removeItem(name)
    setExist(false)
  }

  const doesExist = (coinName) => {
    setExist(localStorage.getItem(coinName) ? true : false)
  }

  useEffect(() => {
    doesExist(name)
  }, [])

  return (
    <div className='cryptoitem'>
      <Link to={`/crypto/${id}`}>
        <div className='cryptoitem-header'>
          <h2>{name}</h2>
          <img src={iconUrl} alt={name} />
        </div>
        <div className='cryptoitem-body'>
          <p>
            Price: <span>{millify(price)}</span>{' '}
          </p>
          <p>
            Market Cap: <span>{millify(cap)}</span>{' '}
          </p>
          <p>
            Daily Change: <span>{millify(change)}</span>{' '}
          </p>
        </div>
      </Link>
      {!simplified && (
        <>
          {exist ? (
            <button
              className='btn-watchlist'
              style={{
                backgroundColor: 'var(--accent-color)',
                color: 'var(--main-white-color)',
                fontWeight: 'bold',
                letterSpacing: '.5px',
              }}
              onClick={handleStorage}
            >
              Remove from watchlist
            </button>
          ) : (
            <button className='btn-watchlist' onClick={handleStorage}>
              Add to wathlist
            </button>
          )}
        </>
      )}
    </div>
  )
}
