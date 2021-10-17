import PropTypes from 'prop-types';
import './WatchTrailerButton.scss';

export default function WatchTrailerButton({
  children,
  onClick,
  ...allyProps
}) {
  return (
    <button
      type="button"
      className="trailerButton"
      onClick={onClick}
      {...allyProps}
    >
      {children}
    </button>
  );
}

WatchTrailerButton.defaultProps = {
  onClick: () => null,
  children: null,
};

WatchTrailerButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string,
};
