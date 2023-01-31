import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import getRockets from '../redux/rockets/connectAPI';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rockets);

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
