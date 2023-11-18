import {APP_TOKEN, baseUrl} from '@/constants/utils';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {store} from '../app/store';

export const budgetApi = createApi({
  reducerPath: 'budgetApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set('app_token', `${APP_TOKEN}`);
      headers.set('Authorization', `Bearer ${store.getState().app.user.token}`);
      return headers;
    },
  }),
  tagTypes: ['Budget'],
  endpoints: (builder) => ({
    getBudgets: builder.query<any, any>({
      query: () => ({
        url: `planner/get`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      providesTags: ['Budget'],
    }),
    setBudget: builder.mutation<any, any>({
      query: (body) => ({
        url: `planner/create`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      }),
      invalidatesTags: ['Budget'],
    }),
  }),
});

export const {useGetBudgetsQuery, useSetBudgetMutation} = budgetApi;
