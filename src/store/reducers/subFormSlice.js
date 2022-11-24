import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

const subFormSlice = createSlice({
  name: 'subForm',
  initialState,
  reducers: {
    updValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updValue } = subFormSlice.actions;

export default subFormSlice.reducer;
