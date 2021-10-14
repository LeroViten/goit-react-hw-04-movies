import { useState } from 'react';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import * as movieAPI from '../../services/apiService';
import MovieList from '../../components/MovieList/MovieList';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  const handleChange = ({ target }) => {
    setQuery(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Nothing found, repeat search! 😊');
      return;
    }
    setStatus('pending');
    movieAPI.getMovieSearch(query).then((response) => {
      const movies = response.results;
      if (movies.length < 1) {
        toast.error(`We've found nothing for your word 😢`);
      }
      setMovies(movies);
    });
    setStatus('resolved');
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
            type="text"
            name="movie"
            placeholder="Enter movie..."
            autoComplete="off"
            onChange={handleChange}
            value={query}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      {status === 'pending' && (
        <Loader
          className="Loader"
          type="ThreeDots"
          color="#b00b69"
          height={100}
          width={100}
          timeout={1000}
        />
      )}
      <MovieList movies={movies} />
      <ToastContainer transition={Zoom} autoClose={3000} />
    </>
  );
}
