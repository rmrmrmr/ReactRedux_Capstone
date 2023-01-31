import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://api.spacexdata.com/v3/missions';

const createRocketsList = (obj) => {
  const result = [];
  obj.forEach((item) => {
    result.push({
      mission_id: item.mission_id,
      mission_name: item.mission_name,
      description: item.description,
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

export default getRockets;
