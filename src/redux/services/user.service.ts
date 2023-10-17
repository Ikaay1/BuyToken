import {APP_TOKEN, baseUrl} from '@/constants/utils';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {store} from '../app/store';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set('app_token', `${APP_TOKEN}`);
      headers.set('Authorization', `Bearer ${store.getState().app.user.token}`);
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUserWallet: builder.query<any, any>({
      query: () => ({
        url: `users/wallet`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      providesTags: ['User'],
    }),
    uploadProfilePicture: builder.mutation<any, any>({
      query: (body) => ({
        url: `users/update/profile/pics`,
        method: 'POST',
        body: body,
        formData: true,
        headers: {},
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {useGetUserWalletQuery, useUploadProfilePictureMutation} = userApi;
