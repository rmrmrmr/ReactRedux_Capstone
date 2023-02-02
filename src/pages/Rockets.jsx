import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Rocket from '../components/Rocket';
import getRockets from '../redux/rockets/connectAPI';

const RocketsList = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <div className="flex h-screen flex-wrap w-screen">
      <Navbar />
      <div className="h-5/6 px-12">
        {
          rockets.length ? rockets.map((rocket) => (
            <Rocket
              rocketID={rocket.rocketID}
              img={rocket.img}
              name={rocket.name}
              description={rocket.description}
              key={rocket.id}
              reserved={rocket.reserved}
            />
          )) : <h1>Rockets not found</h1>
        }
      </div>
    </div>
  );
};

export default RocketsList;
