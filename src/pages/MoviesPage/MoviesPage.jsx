import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import Loader from 'react-loader-spinner';
import * as movieAPI from '../../services/apiService';
import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm/SearchForm';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.css';
import './MoviesPage.scss';

export default function MoviesPage() {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get('query');

  const [userQuery, setUserQuery] = useState(query ?? '');
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!userQuery) return;

    getData();
  }, [userQuery]);

  const getData = () => {
    if (userQuery.trim() === '') {
      toast.error('Nothing found, repeat search! 😊');
      return;
    }
    setStatus('pending');
    movieAPI.getMovieSearch(userQuery).then((response) => {
      const movies = response.results;
      if (movies.length < 1) {
        toast.error(`We've found nothing for your word 😢`);
      }
      setMovies(movies);
    });
    setStatus('resolved');
  };

  const handleQuery = (newQuery) => {
    setUserQuery(newQuery);
    setMovies([]);

    // pushing user search to queryString for proper return with Back button
    history.push({
      ...location,
      search: `query=${newQuery}`,
    });
  };

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
      <SearchForm searchHandler={handleQuery} />
      <MovieList movies={movies} />
      <ToastContainer transition={Zoom} autoClose={3000} />
    </>
  );
}
