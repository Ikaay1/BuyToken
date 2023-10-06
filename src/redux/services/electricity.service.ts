import {APP_TOKEN, baseUrl} from '@/constants/utils';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {store} from '../app/store';

export const electricityApi = createApi({
  reducerPath: 'electricityApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set('app_token', `${APP_TOKEN}`);
      headers.set('Authorization', `Bearer ${store.getState().app.user.token}`);
      return headers;
    },
  }),
  tagTypes: ['Electricity'],
  endpoints: (builder) => ({
    getPowerProviders: builder.query<any, any>({
      query: () => ({
        url: `biller/get/power/provider`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      providesTags: ['Electricity'],
    }),
    getAirtimeProviders: builder.query<any, any>({
      query: () => ({
        url: `biller/get/airtime/provider`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      providesTags: ['Electricity'],
    }),
    getInternetProviders: builder.query<any, any>({
      query: () => ({
        url: `biller/get/data/provider`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      providesTags: ['Electricity'],
    }),
    validateCustomer: builder.mutation<any, any>({
      query: (body) => ({
        url: `biller/power/validateCustomer`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      }),
      invalidatesTags: ['Electricity'],
    }),
    priceList: builder.mutation<any, any>({
      query: (body) => ({
        url: `biller/data/price/list`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      }),
      invalidatesTags: ['Electricity'],
    }),
    buyPower: builder.mutation<any, any>({
      query: (body) => ({
        url: `biller/power/buy`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      }),
      invalidatesTags: ['Electricity'],
    }),
    buyAirtime: builder.mutation<any, any>({
      query: (body) => ({
        url: `biller/airtime/buy`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      }),
      invalidatesTags: ['Electricity'],
    }),
    buyData: builder.mutation<any, any>({
      query: (body) => ({
        url: `biller/data/buy`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      }),
      invalidatesTags: ['Electricity'],
    }),
  }),
});

export const {
  useGetPowerProvidersQuery,
  useValidateCustomerMutation,
  useBuyPowerMutation,
  useGetAirtimeProvidersQuery,
  useBuyAirtimeMutation,
  useGetInternetProvidersQuery,
  usePriceListMutation,
  useBuyDataMutation,
} = electricityApi;
