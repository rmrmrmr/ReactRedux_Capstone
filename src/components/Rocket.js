/* eslint-disable arrow-body-style */
// import { useDispatch } from "react-redux";
import propTypes from 'prop-types';

const Rocket = ({
  rocketID, name, description, img,
}) => {
  return (
    <div
      id={rocketID}
      className="flex w-full h-1/4"
    >
      <img
        className="h-full"
        src={img}
        alt="img not found"
      />
      <h2
        className=""
      >
        {name}
      </h2>
      <h3>{description}</h3>
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
