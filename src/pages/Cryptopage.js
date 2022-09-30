import React from 'react'
import Banner from '../components/Banner/Banner'
import Chart from '../components/Chart/Chart'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom'
import { CheckCircleOutlined } from '@ant-design/icons/lib/icons'
import {
  useGetCoinDataQuery,
  useGetCryptosHistoryQuery,
  useGetSupplyDataQuery,
} from '../services/cryptoApi'
import './styles/Cryptopage.css'

export default function Cryptopage() {
  const { coinId } = useParams()
  const { data: coinSupply } = useGetSupplyDataQuery(coinId)
  const { data: coinHistory } = useGetCryptosHistoryQuery(coinId)
  const { data, isFetching } = useGetCoinDataQuery(coinId)

  if (isFetching) return 'Loading...'

  return (
    <>
      <Banner />
      <div className='page-container' onClick={() => console.log(coinSupply)}>
        <div className='cryptopage-header'>
          <div className='cryptopage-header_container'>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={data?.data?.coin?.iconUrl}
                alt={data?.data?.coin?.name}
              />
              <h1>
                {data?.data?.coin?.name} ({data?.data?.coin?.symbol}) price
              </h1>
            </div>
            <div>
              <h3>
                Coin Rank:
                <span style={{ color: 'var(--main-muted-color)' }}>
                  {' '}
                  {data?.data?.coin?.rank}
                </span>
              </h3>
            </div>
          </div>
        </div>
        <Chart coinHistory={coinHistory} />
        <div className='cryptopage-body'>
          <div className='cryptopage-body_description'>
            <h2>What is {data?.data?.coin?.name}</h2>
            {HTMLReactParser(data?.data?.coin?.description)}
          </div>
          <div className='cryptopage-body_supply'>
            <div className='cryptopage-body_supply-header'>
              <CheckCircleOutlined />
              <h1>Verified supply</h1>
            </div>
            <div className='supply-items-container'>
              <div className='supply-item'>
                <p>Max Amount</p>
                <p className='bold-item'>
                  {coinSupply?.data?.supply?.maxAmount}
                </p>
              </div>
              <div className='supply-item'>
                <p>Total Synced At</p>
                <p className='bold-item'>
                  {coinSupply?.data?.supply?.totalSyncedAt}
                </p>
              </div>
              <div className='supply-item'>
                <p>Total Amount</p>
                <p className='bold-item'>
                  {coinSupply?.data?.supply?.totalAmount}
                </p>
              </div>
              <div className='supply-item'>
                <p>Circulating Synced At</p>
                <p className='bold-item'>
                  {coinSupply?.data?.supply?.circulatingSyncedAt}
                </p>
              </div>
              <div className='supply-item'>
                <p>Circulating Amount</p>
                <p className='bold-item'>
                  {coinSupply?.data?.supply?.circulatingAmount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
