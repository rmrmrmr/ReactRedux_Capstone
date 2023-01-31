import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from '../components/Navbar';
import getRockets from '../redux/rockets/connectAPI';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <div className="Flex">
      <Navbar />
      <h1>rockets</h1>
    </div>
  );
};

export default Rockets;
