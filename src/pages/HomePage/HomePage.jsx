import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import * as movieAPI from '../../services/apiService';
import MovieList from '../../components/MovieList/MovieList';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './HomePage.scss';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');

    movieAPI.getPopularMovies().then((response) => {
      setMovies(response.results);
    });
    setStatus('resolved');
  }, []);

  return (
    <>
      {status === 'pending' && (
        <Loader
          className="Loader"
          type="ThreeDots"
          color="#b00b69"
          height={100}
          width={100}
        />
      )}
      {movies ? (
        <MovieList movies={movies} url={'movies'} location={'/'} />
      ) : (
        <h2>Error getting trending movies 😟</h2>
      )}
    </>
  );
}
