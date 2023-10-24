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
    getUser: builder.query<any, any>({
      query: () => ({
        url: `users`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      providesTags: ['User'],
    }),
    updateProfileName: builder.mutation<any, any>({
      query: (body) => ({
        url: `users/update/profile/name`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      }),
      invalidatesTags: ['User'],
    }),
    updatePassword: builder.mutation<any, any>({
      query: (body) => ({
        url: `users/update/password`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGetUserWalletQuery,
  useUploadProfilePictureMutation,
  useGetUserQuery,
  useUpdateProfileNameMutation,
  useUpdatePasswordMutation,
} = userApi;
