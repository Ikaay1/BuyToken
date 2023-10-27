import {createSlice} from '@reduxjs/toolkit';

import type {PayloadAction} from '@reduxjs/toolkit';

export interface UtilitiesProps {
  utilities: null | any;
  visibility: null | boolean;
}

const initialState: UtilitiesProps = {
  utilities: [],
  visibility: true,
};

export const utilitySlice = createSlice({
  name: 'utilityReducer',
  initialState,
  reducers: {
    setUtilities: (
      state,
      {payload: {payload}}: PayloadAction<{payload: any}>,
    ) => {
      console.log('utilitiesPayload', payload);
      let utilityFiltered = state.utilities?.filter(
        (each: any) => each?.name !== payload?.name,
      );
      state.utilities = [...utilityFiltered, payload];
    },
    updateUtilities: (
      state,
      {payload: {payload}}: PayloadAction<{payload: any}>,
    ) => {
      let index = state.utilities?.findIndex(
        (each: any) => each?.name === payload?.frequently,
      );
      let index2 = state.utilities?.findIndex(
        (each: any) => each?.name === payload?.modal,
      );
      state.utilities[index] = {name: payload.modal};
      state.utilities[index2] = {name: payload.frequently};
    },
    setVisibility: (
      state,
      {payload: {payload}}: PayloadAction<{payload: any}>,
    ) => {
      state.visibility = payload?.visibility;
    },
  },
});

export const {setUtilities, updateUtilities, setVisibility} =
  utilitySlice.actions;

export default utilitySlice.reducer;
