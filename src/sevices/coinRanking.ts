import axios from "axios";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


const apiHeaders= {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '37df9f891fmshd52cb97324c15b6p102306jsn4a88c1a6868a'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url : string) => ({url,headers: apiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=> ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        

    })
    
    
})
export const {
    useGetCryptosQuery
} = cryptoApi;