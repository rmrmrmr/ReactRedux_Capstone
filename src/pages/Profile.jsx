import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import ReservedRockets from '../components/ReservedRockets';

const MyProfile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  function filteredArr(item) {
    if (item.reserved === true) {
      return true;
    }
    return false;
  }
  const resRocketsArr = rockets.filter(filteredArr);
  console.log(resRocketsArr);

  return (
    <div className="flex w-screen h-screen flex-wrap">
      <Navbar />
      <div className="h-5/6 px-12 flex w-full gap-10 mt-12">
        <div
          id="missionsProfile"
          className="h-full w-1/2"
        >
          <h2 className="text-3xl font-semibold">My Missions</h2>
        </div>
        <div
          id="rocketsProfile"
          className="h-full w-1/2"
        >
          <h2 className="text-3xl font-semibold mb-4">My Rockets</h2>
          {
            resRocketsArr.length ? resRocketsArr.map((rocket) => (
              <ReservedRockets
                reservedRockets={rocket.name}
                key={rocket.id}
              />
            )) : <h2>No Reserved Rockets</h2>
          }
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
