import { useState } from 'react';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import './SearchForm.scss';

export default function SearchForm({ searchHandler }) {
  const [query, setQuery] = useState('');

  const handleInput = (event) => {
    const { value } = event.target;
    setQuery(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === '') {
      toast.error('Nothing found, repeat search! 😊');
      return;
    }

    searchHandler(query);
    reset();
  };

  const reset = () => {
    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className="movieInput"
            type="text"
            name="movie"
            placeholder="Enter movie name..."
            autoComplete="off"
            onChange={handleInput}
            value={query}
          />
        </label>
        <button type="submit" className="searchBtn">
          Search
        </button>
      </form>
      <ToastContainer transition={Zoom} autoClose={3000} />
    </>
  );
}

SearchForm.propTypes = {
  searchHandler: PropTypes.func,
};
