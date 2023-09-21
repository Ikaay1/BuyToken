import { createSlice } from '@reduxjs/toolkit';

import type {PayloadAction} from '@reduxjs/toolkit';

export interface IUserProps {
  token: null | string;
  userProfile: null | any;
  data: null | any;
}

const initialState: IUserProps = {
  token: null,
  userProfile: null,
  data: null,
};

export const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setCredentials: (
      state,
      {payload: {payload}}: PayloadAction<{payload: any}>,
    ) => {
      state.token = payload.token;
      state.userProfile = payload.data;
    },
    setData: (state, {payload: {payload}}: PayloadAction<{payload: any}>) => {
      state.data = payload;
    },
    clearData: (state, {payload: {payload}}: PayloadAction<{payload: any}>) => {
      state.data = null;
    },
    logout: () => {
      return initialState;
    },
  },
});

export const {setCredentials, setData, logout, clearData} = userSlice.actions;

export default userSlice.reducer;
