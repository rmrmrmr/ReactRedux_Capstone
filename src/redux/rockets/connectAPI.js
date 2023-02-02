import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://api.spacexdata.com/v3/rockets';

const createRocketsList = (obj) => {
  const result = [];
  obj.forEach((item) => {
    result.push({
      rocketID: `rocket${item.id.toString()}`,
      id: item.id,
      name: item.rocket_name,
      description: item.description,
      img: item.flickr_images[0],
      reserved: false,
    });
  });
  return result;
};

const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async () => {
    try {
      const response = await axios.get(baseURL);
      return createRocketsList(response.data);
    } catch (error) {
      return error;
    }
  },
);

export const reserveRocket = createAsyncThunk(
  'rockets/reserveRockets',
  async (payload, thunkAPI) => {
    const newState = thunkAPI.getState().rockets.rockets.map((rocket) => {
      if (rocket.rocketID !== payload) {
        return rocket;
      }
      return { ...rocket, reserved: true };
    });
    return newState;
  },
);

export const cancelRocket = createAsyncThunk(
  'rockets/canelRockets',
  async (payload, thunkAPI) => {
    const newState = thunkAPI.getState().rockets.rockets.map((rocket) => {
      if (rocket.rocketID !== payload) {
        return rocket;
      }
      return { ...rocket, reserved: false };
    });
    return newState;
  },
);

export default getRockets;
