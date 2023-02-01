import { createSlice } from '@reduxjs/toolkit';
import getRockets, { reserveRocket } from './connectAPI';

const initialState = {
  rockets: [],
  status: null,
};

const rockets = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: {
    [getRockets.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [getRockets.fulfilled]: (state, action) => ({
      ...state,
      status: 'success',
      rockets: action.payload,
    }),
    [getRockets.rejected]: (state) => ({
      ...state,
      status: 'rejected',
    }),
    [reserveRocket.fulfilled]: (state, action) => ({
      status: 'success',
      rockets: action.payload,
    }),
  },
});

export default rockets.reducer;
