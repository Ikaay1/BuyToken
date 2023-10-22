import {createSlice} from '@reduxjs/toolkit';

import type {PayloadAction} from '@reduxjs/toolkit';

export interface ServiceProps {
  utility: null | any;
}

const initialState: ServiceProps = {
  utility: null,
};

export const serviceSlice = createSlice({
  name: 'serviceReducer',
  initialState,
  reducers: {
    setUtility: (
      state,
      {payload: {payload}}: PayloadAction<{payload: any}>,
    ) => {
      state.utility = payload?.name;
    },
    clearUtility: (
      state,
      {payload: {payload}}: PayloadAction<{payload: any}>,
    ) => {
      return initialState;
    },
  },
});

export const {setUtility, clearUtility} = serviceSlice.actions;

export default serviceSlice.reducer;
