import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://api.spacexdata.com/v3/rockets';

const createRocketsList = (obj) => {
  const result = [];
  obj.forEach((item) => {
    result.push({
      id: item.id,
      name: item.rocket_name,
      description: item.description,
      img: item.flickr_images[0],
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
