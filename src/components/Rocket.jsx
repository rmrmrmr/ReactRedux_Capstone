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
          { reserved
          && (
          <span className="text-white bg-teal-600 px-2 py-[1px] rounded-md text-sm mr-3">Reserved</span>
          )}
          {description}
        </h3>
        { !reserved
        && (
          <button
            type="button"
            className="text-white bg-blue-500 px-4 py-2 rounded-md font-semibold mt-auto"
            onClick={() => reserveButton()}
          >
            Reserve Rocket
          </button>
        )}
        { reserved
        && (
        <button
          type="button"
          className="px-4 py-2 rounded-md text-slate-600 border-2 border-slate-600 font-semibold mt-auto"
          onClick={() => cancelButton()}
        >
          Cancel Reservation
        </button>
        )}
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
