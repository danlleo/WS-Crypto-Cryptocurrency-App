import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const { REACT_APP_X_RAPID_API_HOST_BING, REACT_APP_X_RAPID_API_KEY_BING } =
  process.env

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'
const cryptoNewsApiHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': REACT_APP_X_RAPID_API_HOST_BING,
  'x-rapidapi-key': REACT_APP_X_RAPID_API_KEY_BING,
}

const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders })

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi
