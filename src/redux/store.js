import { configureStore } from '@reduxjs/toolkit';
// import rocketsReducer from './rockets/rockets';

const reducer = {
  // rockets: rocketsReducer,
};

const store = configureStore({
  reducer,
});

export default store;
