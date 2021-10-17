import PropTypes from 'prop-types';
import './LoadMoreButton.scss';

export default function LoadMoreButton({ onLoadMore }) {
  return (
    <div className="loadMoreWrapper">
      <button type="button" className="loadMoreButton" onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
}

LoadMoreButton.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
