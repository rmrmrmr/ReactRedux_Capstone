import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const createMissionList = (obj) => {
  const result = [];
  obj.forEach((item) => {
    result.push({
      id: item.mission_id,
      name: item.mission_name,
      description: item.description,
    });
  });
  return result;
};

const fetchMission = createAsyncThunk(
  'missions/getMissions',
  async () => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v3/missions');
      return createMissionList(response.data);
    } catch (error) {
      return error;
    }
  },
);

export default fetchMission;
