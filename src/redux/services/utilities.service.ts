import {APP_TOKEN, baseUrl} from '@/constants/utils';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {store} from '../app/store';

export const utilitiesApi = createApi({
  reducerPath: 'utilitiesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set('app_token', `${APP_TOKEN}`);
      headers.set('Authorization', `Bearer ${store.getState().app.user.token}`);
      return headers;
    },
  }),
  tagTypes: ['Utilities'],
  endpoints: (builder) => ({
    addFavoriteUtilities: builder.mutation<any, any>({
      query: (body) => ({
        url: `users/add/favorite/billers`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      }),
      invalidatesTags: ['Utilities'],
    }),
    updateFavoriteUtilities: builder.mutation<any, any>({
      query: (body) => ({
        url: `users/update/favorite/billers`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      }),
      invalidatesTags: ['Utilities'],
    }),
  }),
});

export const {
  useAddFavoriteUtilitiesMutation,
  useUpdateFavoriteUtilitiesMutation,
} = utilitiesApi;
