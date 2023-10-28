import {APP_TOKEN, baseUrl} from '@/constants/utils';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {store} from '../app/store';

export const transactionsApi = createApi({
  reducerPath: 'transactionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set('app_token', `${APP_TOKEN}`);
      headers.set('Authorization', `Bearer ${store.getState().app.user.token}`);
      return headers;
    },
  }),
  tagTypes: ['Transactions'],
  endpoints: (builder) => ({
    getTransactions: builder.query<any, any>({
      query: ({
        page,
        limit,
        status,
        type,
        date,
      }: {
        page: number;
        limit: number;
        status: string;
        type: string;
        date: string;
      }) => ({
        url: `transactions/get/all?page=${page}&limit=${limit}&status=${status}&type=${type}&date=${date}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      providesTags: ['Transactions'],
    }),
  }),
});

export const {useGetTransactionsQuery} = transactionsApi;
