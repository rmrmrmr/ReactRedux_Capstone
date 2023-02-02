import propTypes from 'prop-types';

const ReservedRockets = ({ reservedRockets }) => (
  <div className="w-full border-2 py-3 px-2">{reservedRockets}</div>
);

ReservedRockets.propTypes = {
  // eslint-disable-next-line react/require-default-props
  reservedRockets: propTypes.string,
};

export default ReservedRockets;
