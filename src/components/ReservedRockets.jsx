import propTypes from 'prop-types';

const ReservedRockets = ({ reservedRockets }) => (
  <div className="w-full border-2 py-3 px-2 border-r-2 border-l-2 border-t-2 border-b-0 border-slate-400">{reservedRockets}</div>
);

ReservedRockets.propTypes = {
  // eslint-disable-next-line react/require-default-props
  reservedRockets: propTypes.string,
};

export default ReservedRockets;
