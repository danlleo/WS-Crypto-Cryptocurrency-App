import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const { REACT_APP_X_RAPID_API_HOST, REACT_APP_X_RAPID_API_KEY } = process.env

const baseUrl = 'https://coinranking1.p.rapidapi.com'
const cryptoApiHeaders = {
  'x-rapidapi-host': REACT_APP_X_RAPID_API_HOST,
  'x-rapidapi-key': REACT_APP_X_RAPID_API_KEY,
}

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptosHistory: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}/history`),
    }),
    getCoinData: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getSupplyData: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}/supply`),
    }),
  }),
})

export const {
  useGetCryptosQuery,
  useGetCryptosHistoryQuery,
  useGetCoinDataQuery,
  useGetSupplyDataQuery,
} = cryptoApi
