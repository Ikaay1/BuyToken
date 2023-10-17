import {APP_TOKEN, baseUrl} from '@/constants/utils';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {store} from '../app/store';

export const notificationsApi = createApi({
  reducerPath: 'notificationsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set('app_token', `${APP_TOKEN}`);
      headers.set('Authorization', `Bearer ${store.getState().app.user.token}`);
      return headers;
    },
  }),
  tagTypes: ['Notifications'],
  endpoints: (builder) => ({
    getNotifications: builder.query<any, any>({
      query: () => ({
        url: `notify/get/notifications`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      providesTags: ['Notifications'],
    }),
    readNotification: builder.mutation<any, any>({
      query: (id) => ({
        url: `notify/read/notifications/${id}`,
        method: 'GET',
      }),
    }),
    clearNotifications: builder.mutation<any, any>({
      query: (body) => ({
        url: `notify/clear/notifications`,
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: ['Notifications'],
    }),
  }),
});

export const {
  useGetNotificationsQuery,
  useReadNotificationMutation,
  useClearNotificationsMutation,
} = notificationsApi;
