import React from 'react'
import Banner from '../components/Banner/Banner'
import Cryptocurrencies from '../components/Cryptocurrencies/Cryptocurrencies'

export default function Currenciespage() {
  return (
    <>
      <Banner />
      <div className='page-container'>
        <Cryptocurrencies simplified={false} />
      </div>
    </>
  )
}
