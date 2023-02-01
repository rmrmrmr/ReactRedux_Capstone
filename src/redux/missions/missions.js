import { createSlice } from '@reduxjs/toolkit';
import fetchMission from './fetchMissions';

const initialState = {
  missions: [],
  status: null,
};

const missions = createSlice({
  name: 'missions',
  initialState,
  extraReducers: {
    [fetchMission.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [fetchMission.fulfilled]: (state, action) => ({
      ...state,
      status: 'success',
      missions: action.payload,
    }),
    [fetchMission.rejected]: (state) => ({
      ...state,
      status: 'rejected',
    }),
  },
});

export default missions.reducer;
