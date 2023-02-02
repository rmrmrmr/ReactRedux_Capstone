import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket } from '../redux/rockets/connectAPI';

const Rocket = ({
  rocketID, name, description, img, reserved,
}) => {
  const dispatch = useDispatch();
  const reserveButton = () => {
    dispatch(reserveRocket(rocketID));
  };
  const cancelButton = () => {
    dispatch(cancelRocket(rocketID));
  };

  return (
    <div
      id={rocketID}
      className="flex w-full h-1/3 py-5 gap-6"
    >
      <img
        className="h-full w-[28%] max-w-[250px]"
        src={img}
        alt="img not found"
      />
      <div
        className="h-full w-[72%] flex flex-col items-start"
      >
        <h2
          className="font-semibold text-xl"
        >
          {name}
        </h2>
        <h3
          className="text-sm mt-1"
        >
          {description}
        </h3>
        <button
          type="button"
          className="px-4 py-2 rounded-md mt-4 text-slate-600 border-2 border-slate-600 font-semibold"
          onClick={() => cancelButton()}
        >
          Cancel Reservation
        </button>
        <button
          type="button"
          className="text-white bg-blue-500 px-4 py-2 rounded-md mt-4 font-semibold"
          onClick={() => reserveButton()}
        >
          Reserve Rocket
        </button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocketID: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
  reserved: propTypes.bool.isRequired,
};

export default Rocket;
