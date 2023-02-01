import propTypes from 'prop-types';

const Mission = ({
  missionID, name, description, img,
}) => (
  <div
    id={missionID}
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
      >
        Reserve Mission
      </button>
    </div>
  </div>
);

Mission.propTypes = {
  missionID: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
};

export default Mission;
