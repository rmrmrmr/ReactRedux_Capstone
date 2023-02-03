import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ReservedRockets from '../components/ReservedRockets';
import { getMissions } from '../redux/missions/missions';

const MyProfile = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const { rockets } = useSelector((state) => state.rockets);
  function filteredArr(item) {
    if (item.reserved === true) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, [dispatch, missions.length]);

  const resRocketsArr = rockets.filter(filteredArr);
  const filteredMission = missions.filter((mission) => mission.joined === true);

  return (
    <div className="flex w-screen h-screen flex-wrap">
      <Navbar />
      <div className="h-5/6 px-12 flex w-full gap-10 mt-12">
        <div
          id="missionsProfile"
          className="h-full w-1/2"
        >
          <h2 className="text-3xl font-semibold mb-4">My Missions</h2>
          {filteredMission.length > 0 ? (
            <div>
              {missions.filter((mission) => mission.joined).map((mission) => (
                <div key={mission.mission_id} className="w-full border-2 border-b-0 py-3 px-2 border-slate-400">
                  <h2>{mission.mission_name}</h2>
                </div>
              ))}
            </div>
          ) : <h2>No Reserved Missions</h2>}
          {
          filteredMission.length > 0 && (<div className="w-full border-slate-400 py-3 px-2 border-t-2"> </div>)
          }
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
          {
          resRocketsArr.length > 0 && (<div className="w-full border-slate-400 py-3 px-2 border-t-2"> </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
