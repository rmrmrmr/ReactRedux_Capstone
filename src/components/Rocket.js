import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/connectAPI';

const Rocket = ({
  rocketID, name, description, img,
}) => {
  const dispatch = useDispatch();
  const actionButton = () => {
    dispatch(reserveRocket(rocketID));
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
          className="text-white bg-blue-500 px-4 py-2 rounded-md mt-4"
          onClick={() => actionButton()}
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
};

export default Rocket;
