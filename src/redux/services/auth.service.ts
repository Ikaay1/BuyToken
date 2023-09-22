import { APP_TOKEN, baseUrl } from '@/constants/utils';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set('app_token', `${APP_TOKEN}`);
      return headers;
    },
  }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    login: builder.mutation<any, any>({
      query: (body) => ({
        url: `auth/login`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      }),
      invalidatesTags: ['Auth'],
    }),
    socialLogin: builder.mutation<any, any>({
      query: (body) => ({
        url: `auth/social/login`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      }),
      invalidatesTags: ['Auth'],
    }),
    signup: builder.mutation<any, any>({
      query: (body) => ({
        url: `auth/register`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      }),
      invalidatesTags: ['Auth'],
    }),
    socialSignup: builder.mutation<any, any>({
      query: (body) => ({
        url: `auth/social/register`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      }),
      invalidatesTags: ['Auth'],
    }),
    sendOTPToEmail: builder.mutation<any, any>({
      query: (body) => ({
        url: `auth/send/email/otp`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      }),
      invalidatesTags: ['Auth'],
    }),
    sendOTPToMobile: builder.mutation<any, any>({
      query: (body) => ({
        url: `auth/send/mobile/otp`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      }),
      invalidatesTags: ['Auth'],
    }),
    validateEmailOtp: builder.mutation<any, any>({
      query: (body) => ({
        url: `auth/validate/email/otp`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      }),
      invalidatesTags: ['Auth'],
    }),
    validateMobileOtp: builder.mutation<any, any>({
      query: (body) => ({
        url: `auth/validate/mobile/otp`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      }),
      invalidatesTags: ['Auth'],
    }),
    resetPassword: builder.mutation<any, any>({
      query: (body) => ({
        url: `auth/reset/password`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useSendOTPToEmailMutation,
  useValidateEmailOtpMutation,
  useSendOTPToMobileMutation,
  useValidateMobileOtpMutation,
  useResetPasswordMutation,
  useSocialLoginMutation,
  useSocialSignupMutation,
} = authApi;
